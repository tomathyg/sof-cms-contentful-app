// generateStaticParams.js

//const { getAllScenes } = require('./api-2.ts');

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: {
        //tags: ['scenes'],
        revalidate: 0
      },
    }
  ).then((response) => response.json())
  .catch(error => {
    console.log("API FETCH ERROR:", error);
  });
}

const SCENE_GRAPHQL_FIELDS_OLD = `
    title
    slug
    submissionsCollection(limit: 100) {
        items {
            id
            submissionImage {
                url
            }
        }
    }
`

const SCENE_GRAPHQL_FIELDS = `
    total
    skip
    limit
    items {
        id
        email
        text
        submissionImage {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
        }
    }
`

function extractSceneEntries(fetchResponse) {
  //console.log("REWRITE SCENES IMAGES");
  console.log("SCENE ENTRIES RESPONSE:", fetchResponse);
  console.log("SCENE ENTRIES DATA:", fetchResponse.data);
  //const items = fetchResponse?.data?.sceneCollection?.items;
  const items = fetchResponse?.data?.submissionsGalleryCollection?.items;
  console.log("SCENE ITEMS", items);
  if (!items) { return []; }
  return items.filter((item) => item !== null);
}

function getAllScenes(isDraftMode) {
  return fetchGraphQL(
    `query {
      submissionsGalleryCollection(preview: ${
        isDraftMode ? 'true' : 'false'
      }, limit: 100) {
        ${SCENE_GRAPHQL_FIELDS}
      }
    }`,
    isDraftMode
  ).then(entries => extractSceneEntries(entries));
}

async function generateSceneImageRewrites() {
    const allSubmissions = await getAllScenes(false);
    let rewriteRules = [];

    //console.log("SCENE ITEMS COUNT:", allScenes.length);
  
    allSubmissions.forEach(item => {
      console.log("ITEM:", item);
      if(item && item.id && item.submissionImage && item.submissionImage.url) {
        const imageSlug = item.id.split('-')[1];
        //console.log(imageSlug);
        rewriteRules.push({
          source: `/scenes/scene-1/gallery/${imageSlug}.jpg`,
          destination: item.submissionImage.url //+ '?w=:w&q=:q' // + '?:paths*' // + '?w=1080&q=100'
        });
      }
      /*item.submissionsCollection.items.forEach((submission, index) => {
        //const imageSlug = submission.name.toLowerCase();
        //console.log("SUBMISSION:", submission);
        if(submission && submission.id && submission.submissionImage && submission.submissionImage.url) {
          const imageSlug = submission.id.split('-')[1];
          //console.log(imageSlug);
          rewriteRules.push({
            source: `/scenes/${scene.slug}/gallery/${imageSlug}.jpg`,
            destination: submission.submissionImage.url //+ '?w=:w&q=:q' // + '?:paths*' // + '?w=1080&q=100'
          });
        }
      });*/
    });
    console.log("REWRITE RULES:", rewriteRules);
  
    return rewriteRules;
}
  
module.exports = generateSceneImageRewrites;
  