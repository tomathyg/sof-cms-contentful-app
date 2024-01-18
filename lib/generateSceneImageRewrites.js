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
  //console.log("SCENE ENTRIES RESPONSE:", fetchResponse);
  console.log("SCENE ENTRIES DATA:", fetchResponse.data);
  //const items = fetchResponse?.data?.sceneCollection?.items;
  const items = fetchResponse?.data?.submissionsGalleryCollection?.items;
  //console.log("SCENE ITEMS", items);
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
      if(item && item.id && item.submissionImage && item.submissionImage.url) {
        const idArray = item.id.split('-');
        const sceneNumber = idArray[0].replace(/S/i, '');
        const imageSlug = idArray[1];
        rewriteRules.push({
          source: `/scenes/scene-${sceneNumber}/gallery/${imageSlug}.jpg`,
          destination: item.submissionImage.url
        });
      }
    });
    //console.log("REWRITE RULES:", rewriteRules);
  
    return rewriteRules;
}
  
module.exports = generateSceneImageRewrites;
  