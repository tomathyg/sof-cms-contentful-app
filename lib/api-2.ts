const SCENE_GRAPHQL_FIELDS = `
    title
    slug
    nftContractId
    submissionsCollection(limit: 20) {
        items {
            name
            text
            submissionImage {
                url
            }
        }
    }
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
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

function extractScene(fetchResponse: any): any {
    //console.log("SCENE RESPONSE:", fetchResponse);
  return fetchResponse?.data?.sceneCollection?.items?.[0]
}

function extractSceneEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.sceneCollection?.items
}

function extractHomePageData(fetchResponse: any): any {
  return fetchResponse?.data?.homePage
}

export async function getPreviewSceneBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      sceneCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${SCENE_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractScene(entry)
}

export async function getAllScenes(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
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
  )
  //console.log("ENTRIES:", entries);
  return extractSceneEntries(entries)
}

export async function getSceneAndMoreScenes(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      sceneCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${SCENE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      sceneCollection(where: { slug_not_in: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${SCENE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    scene: extractScene(entry),
    moreScenes: extractSceneEntries(entries),
  }
}

const HOME_PAGE_GRAPHQL_FIELDS = `
  heading
`
export async function getHomePageData(isDraftMode: boolean): Promise<any> {
  const data = await fetchGraphQL(
    `query HomePage {
      homePage(id: "rc7u3RuVbou2HcxxPynN5", preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
          ${HOME_PAGE_GRAPHQL_FIELDS}
      }
    }`,
    isDraftMode
  )
  return extractHomePageData(data)
}