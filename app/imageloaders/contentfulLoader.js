// Docs: https://www.contentful.com/developers/docs/references/images-api/
//'use server'
export default function contentfulLoader({ src, width, quality }) {
  const url = new URL(`${src}`)
  url.searchParams.set('fm', 'webp')
  url.searchParams.set('w', width.toString())
  url.searchParams.set('q', (quality || 75).toString())
  return url.href
}