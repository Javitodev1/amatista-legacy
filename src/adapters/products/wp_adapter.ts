import { ProductFetcher } from "./fetcher"
import { 
  type Product, 
  type ProductImage,
  type PageInfo,
  type GalleryProducts
} from "./product"
import { CATEGORIES, Category } from "./category"

export const STOCK_STATUS = Object.freeze({
  "IN_STOCK": true,
  "OUT_STOCK": false,
  "ON_BACKORDER": false,
})

export const NOT_FOUND_IMAGE = {
  id: "NotFoundImageId",
  src: 'https://placehold.co/500x500',
  height: 300,
  width: 300,
} satisfies ProductImage

export class WPAdapter {
  static getLatestProduct = async (last = 8) => {
    return new Promise<Product[]>((resolve) => {
      ProductFetcher.getLatestProducts(last)
        .then((response) => response.data.products.edges.map(({node}) => {
            const {id, name, featuredImage} = node
            
            const price = parseInt(node.price ?? "0")
            const isInStock = STOCK_STATUS[node.stockStatus as keyof typeof STOCK_STATUS] ?? false

            const thumbnail = !featuredImage ? NOT_FOUND_IMAGE : {
              id: featuredImage?.node.id,
              src: featuredImage?.node.sourceUrl,
              height: featuredImage?.node.mediaDetails.height,
              width: featuredImage?.node.mediaDetails.width,
            } satisfies ProductImage

            const categories = [CATEGORIES.all] satisfies Category[]
            const galleryImages = [] as ProductImage[]

            const stockQuantity = 0
            const description = ""
            const cursor = null

            return {
              id: id,
              title: name,
              price: price,
              isInStock: isInStock,
              thumbnail: thumbnail,
              categories: categories,
              galleryImages: galleryImages,
              cursor: cursor,
              description: description,
              stockQuantity: stockQuantity,
            } satisfies Product
          }) satisfies Product[]
        )
        .then((latestProducts) => resolve(latestProducts))
    })
  }

  static getGalleryProducts = async (first: number, afterCursor: string, filter: Category) => {
    const categoryIn = filter === CATEGORIES.all ? null : filter.slug
    return new Promise<GalleryProducts>((resolve) => {
      ProductFetcher.getGalleryProducts(first, afterCursor, categoryIn)
        .then((response) => {
          const pageInfo = response.data.products.pageInfo satisfies PageInfo as PageInfo
          const products = response.data.products.edges.map((data) => {
            const { cursor, node } = data
            const { id, name } = node
            const price = parseInt(node.price ?? "0")
            const isInStock = STOCK_STATUS[node.stockStatus as keyof typeof STOCK_STATUS] ?? false
            
            const { featuredImage } = node
            const thumbnail = !featuredImage ? NOT_FOUND_IMAGE : {
              id: featuredImage?.node.id,
              src: featuredImage?.node.sourceUrl,
              height: featuredImage?.node.mediaDetails.height,
              width: featuredImage?.node.mediaDetails.width,
            } satisfies ProductImage

            const galleryImages = [] as ProductImage[]

            const productCategories = node.productCategories.nodes
            const categories = !productCategories ? [CATEGORIES.all] : productCategories.map(({slug}) => {
              return CATEGORIES[slug as keyof typeof CATEGORIES]
            }).filter((category) => category != undefined) satisfies Category[]

            const stockQuantity = 0
            const description = ""

            return {
              id: id,
              title: name,
              price: price,
              isInStock: isInStock,
              thumbnail: thumbnail,
              categories: categories,
              galleryImages: galleryImages,
              cursor: cursor,
              description: description,
              stockQuantity: stockQuantity,
            } satisfies Product
          }) satisfies Product[]

          return {
            products,
            pageInfo
          } satisfies GalleryProducts
        })
        .then((galleryProducts) => resolve(galleryProducts))
    })
  }

  static getProductById = async (id: string) => {
    return new Promise<Product>((resolve) => {
      ProductFetcher.getProductsById(id)
        .then((data) => {
          const node = data.data.product
          const {id, name, stockStatus} = node

          const description = node.description ?? 'sin descripción'
          const price = parseInt(node.price ?? "0")
          const isInStock = STOCK_STATUS[stockStatus as keyof typeof STOCK_STATUS] ?? false
          const stockQuantity = node.stockQuantity ?? ( isInStock ? 1 : 0 )
          
          const { featuredImage } = node
          const thumbnail = !featuredImage ? NOT_FOUND_IMAGE : {
            id: featuredImage?.node.id,
            src: featuredImage?.node.sourceUrl,
            height: featuredImage?.node.mediaDetails.height,
            width: featuredImage?.node.mediaDetails.width,
          } satisfies ProductImage

          const images = node.galleryImages.nodes
          const galleryImages = !images ? [] : images.map(({id, sourceUrl, mediaDetails}) => {
            const { height, width } = mediaDetails
            return {
              id: id,
              src: sourceUrl,
              height: height,
              width: width,
            } satisfies ProductImage
          }) satisfies ProductImage[]
          galleryImages.push(thumbnail)

          const productCategories = node.productCategories.nodes
          const categories = !productCategories ? [CATEGORIES.all] : productCategories.map(({slug}) => {
            return CATEGORIES[slug as keyof typeof CATEGORIES]
          }).filter((category) => category != undefined) satisfies Category[]

          const cursor = null

          return {
            id: id,
            title: name,
            price: price,
            isInStock: isInStock,
            thumbnail: thumbnail,
            categories: categories,
            galleryImages: galleryImages,
            cursor: cursor,
            description: description,
            stockQuantity: stockQuantity,
          } satisfies Product
        })
        .then((productById) => resolve(productById))
    })
  }
}