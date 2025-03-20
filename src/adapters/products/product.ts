import { Category } from './category'

export interface Product {
  id: string
  cursor: string | null
  title: string
  description: string
  price: number
  isInStock: boolean
  stockQuantity: number
  thumbnail: ProductImage
  galleryImages: ProductImage[]
  categories: Category[]
}

export interface ProductImage {
  id: string
  src: string
  width: number
  height: number
}

export interface PageInfo {
  hasNextPage: boolean
  endCursor: string
}

export interface GalleryProducts {
  products: Product[],
  pageInfo: PageInfo,
}
