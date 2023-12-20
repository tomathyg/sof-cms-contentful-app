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

const SCENE_GRAPHQL_FIELDS = `
    title
    slug
    colour
    nftContractAddress
    nftAbi
    nftPrice
    mintFee
    manifoldClaimPage
    manifoldCoreCreatorContractAddress
    manifoldClaimInstanceId
    crossmintProjectIdProduction
    crossmintCollectionIdProduction
    audioMp3 {
      title
      url
    }
    artworkSubmission {
      id
      text
      submissionImage {
          contentType
          fileName
          size
          url
          width
          height
      }
    }
    submissionsCollection(limit: 50) {
        items {
            id
            text
            submissionImage {
                url
            }
        }
    }
`

function extractScene(fetchResponse: any): any {
  //console.log("SCENE RESPONSE:", fetchResponse);
  //console.log("SCENE EXTRACT:", fetchResponse?.data?.sceneCollection?.items?.[0]);
  return fetchResponse?.data?.sceneCollection?.items?.[0]
}

export async function getScene(
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
  //console.log("SCENE ENTRY:", entry);
  return extractScene(entry)
}


function extractSceneEntries(fetchResponse: any): any[] {
  //console.log("SCENE ENTRIES RESPONSE:", fetchResponse);
  const items = fetchResponse?.data?.sceneCollection?.items;
  //console.log("SCENE ITEMS", items);
  if (!items) { return []; }
  return items.filter((item: any) => item !== null);
}

function extractHomePageData(fetchResponse: any): any {
  //console.log("HOME PAGE RESPONSE:", fetchResponse);
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
  typeFormId
  socialFollowLinksCollection {
      total
      skip
      limit
      items {
          title
          url
      }
  }
  introTopText
  introBottomText
  floatingImagesCollection {
    total
    skip
    limit
    items {
        title
        contentType
        fileName
        size
        url
        width
        height
    }
  }
  introLayersImagesCollection {
      total
      skip
      limit
      items {
          title
          contentType
          fileName
          size
          url
          width
          height
      }
  }
  step1Heading
  step1Description
  step1Guidelines
  step2Heading
  step2Description
  step2Guidelines
  step3Heading
  step3Description
  step3Guidelines
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

function extractAboutPageData(fetchResponse: any): any {
  //console.log("ABOUT PAGE RESPONSE:", fetchResponse);
  return fetchResponse?.data?.aboutPage
}

const ABOUT_PAGE_GRAPHQL_FIELDS = `
  title
  paragraph1
  paragraph2
  paragraph3
  artistQuote
`

export async function getAboutPageData(isDraftMode: boolean): Promise<any> {
  const data = await fetchGraphQL(
    `query HomePage {
      aboutPage(id: "3lYMBTLyRk71EzoZEsIAhW", preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
          ${ABOUT_PAGE_GRAPHQL_FIELDS}
      }
    }`,
    isDraftMode
  )
  return extractAboutPageData(data)
}


function extractCreditsPageData(fetchResponse: any): any {
  //console.log("ABOUT PAGE RESPONSE:", fetchResponse);
  return fetchResponse?.data?.credits
}

const CREDITS_PAGE_GRAPHQL_FIELDS = `
  title
  introduction
  contributorsCollection(limit: 100) {
      items {
          name
          role
      }
      total
      skip
      limit
  }
`

export async function getCreditsPageData(isDraftMode: boolean): Promise<any> {
  const data = await fetchGraphQL(
    `query Credits {
      credits(id: "20CTUwxdDFkzbTA28Ddw1D", preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
          ${CREDITS_PAGE_GRAPHQL_FIELDS}
      }
    }`,
    isDraftMode
  )
  return extractCreditsPageData(data)
}


function extractProcessPageData(fetchResponse: any): any {
  //console.log("ABOUT PAGE RESPONSE:", fetchResponse);
  return fetchResponse?.data?.processPage
}

const PROCESS_PAGE_GRAPHQL_FIELDS = `
  title
  step1Heading
  step1Description
  step1Guidelines
  step2Heading
  step2Description
  step2Guidelines
  step3Heading
  step3Description
  step3Guidelines
`

export async function getProcessPageData(isDraftMode: boolean): Promise<any> {
  const data = await fetchGraphQL(
    `query ProcessPage {
      processPage(id: "2CyOCl8UF0NhzM4Kr6EA1X", preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
          ${PROCESS_PAGE_GRAPHQL_FIELDS}
      }
    }`,
    isDraftMode
  )
  return extractProcessPageData(data)
}


function extractSubmitPageData(fetchResponse: any): any {
  //console.log("ABOUT PAGE RESPONSE:", fetchResponse);
  return fetchResponse?.data?.submitPage
}

const SUBMIT_PAGE_GRAPHQL_FIELDS = `
  title
  audioMp3 {
    title
    contentType
    fileName
    size
    url
  }
`

export async function getSubmitPageData(isDraftMode: boolean): Promise<any> {
  const data = await fetchGraphQL(
    `query SubmitPage {
      submitPage(id: "5g2PQvIyNkdFEqwRf2hTfM", preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
          ${SUBMIT_PAGE_GRAPHQL_FIELDS}
      }
    }`,
    isDraftMode
  )
  return extractSubmitPageData(data)
}