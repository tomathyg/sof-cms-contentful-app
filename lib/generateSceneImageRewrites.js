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
        tags: ['scenes'],
        revalidate: 10
      },
    }
  ).then((response) => response.json())
  .catch(error => {
    console.log("API FETCH ERROR:", error);
  });
}

const SCENE_GRAPHQL_FIELDS = `
    title
    slug
    submissionsCollection(limit: 50) {
        items {
            name
            submissionImage {
                url
            }
        }
    }
`

function extractSceneEntries(fetchResponse) {
  console.log("REWRITE SCENES IMAGES");
  //console.log("SCENE ENTRIES RESPONSE:", fetchResponse);
  const items = fetchResponse?.data?.sceneCollection?.items;
  //console.log("SCENE ITEMS", items);
  if (!items) { return []; }
  return items.filter((item) => item !== null);
}

function getAllScenes(isDraftMode) {
  return fetchGraphQL(
    `query {
      sceneCollection(where: { slug_exists: true }, preview: ${
        isDraftMode ? 'true' : 'false'
      }, limit: 10) {
        items {
          ${SCENE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  ).then(entries => extractSceneEntries(entries));
}

async function generateSceneImageRewrites() {
    const allScenes = await getAllScenes(false);
    let rewriteRules = [];
  
    allScenes.forEach(scene => {
      scene.submissionsCollection.items.forEach(submission => {
        const imageSlug = submission.name.toLowerCase();
        rewriteRules.push({
          source: `/scenes/${scene.slug}/${imageSlug}`,
          destination: submission.submissionImage.url + '?w=1080&q=100' // Assuming image.url is the actual URL of the image
        });
      });
    });

    console.log("REWRITE RULES:", rewriteRules);
  
    return rewriteRules;
}
  
module.exports = generateSceneImageRewrites;
  