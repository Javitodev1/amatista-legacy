import type { WPResponse, PageInfo, Edge } from '../types/wp-response'
import { StockStates, type Product, type ProductImage } from '../types/product'
import { mappedFilters } from '@/data/filters'

const { PUBLIC_WP_UPLOAD } = import.meta.env

export const moneyFormatter = Intl.NumberFormat('es-UY', {
  style: 'currency',
  currency: 'UYU',
  minimumFractionDigits: 0,
})

export function wpByProductAdapter(edge: Edge) {
  const { node } = edge

  const description = node.description ?? 'Sin descripción'
  const price = parseFloat(node.price ?? 0)

  const isInStock = node.stockStatus === StockStates.IN_STOCK
  const stockQuantity: number =  isInStock && node.stockQuantity == null ? 1 : !isInStock ? 0 : node.stockQuantity

  const categories = node.productCategories.nodes
    .filter((node) => node.slug !== 'uncategorized')
    .map((node) => {
      const slug = node.slug as keyof typeof mappedFilters
      return {
        id: slug,
        name: mappedFilters[slug] ?? `Categoría Desconocida: ${slug}`
      }
    })

  let thumbnail: ProductImage
  if (node.featuredImage) {
    const featuredImageNode = node.featuredImage.node
    thumbnail = {
      id: featuredImageNode.id,
      url: PUBLIC_WP_UPLOAD + featuredImageNode.uri,
      height: featuredImageNode.mediaDetails.height,
      width: featuredImageNode.mediaDetails.width,
    } satisfies ProductImage
  } else {
    thumbnail = {
      id: 'place-holder-image-500x500',
      url: 'https://placehold.co/500x500',
      height: 500,
      width: 500,
    } satisfies ProductImage
  }

  let images = [] as ProductImage[]
  if (node.galleryImages) {
    images = node.galleryImages.nodes.map((node) => {
      return {
        id: node.id,
        url: PUBLIC_WP_UPLOAD + node.uri,
        height: node.mediaDetails.height,
        width: node.mediaDetails.width,
      }
    }) satisfies ProductImage[]
  }

  images.push(thumbnail)

  return {
    id: node.id,
    title: node.name,
    description: description,
    price: price,
    slug: node.slug,
    isInStock: isInStock,
    stockQuantity: stockQuantity,
    categories: categories,
    thumbnail: thumbnail,
    images: images,
  } satisfies Product
}

export function wpProductsAdapter(res: WPResponse) {
  const { pageInfo, edges } = res.data.products

  const products = edges.map((edge) => wpByProductAdapter(edge))

  return {products, pageInfo} satisfies {products: Product[], pageInfo: PageInfo}
}
