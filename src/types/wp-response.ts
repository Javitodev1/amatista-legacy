export interface WPResponse {
  data: Data
  extensions: Extensions
}

export interface Data {
  products: Products
}

export interface Products {
  edges: Edge[]
  pageInfo: PageInfo
}

export interface Edge {
  node: Node
}

export interface Node {
  id: string
  name: string
  description?: string
  galleryImages: GalleryImages
  featuredImage: FeaturedImage
  price: string
  slug: string
  stockStatus: string
  stockQuantity: any
  productCategories: ProductCategories
}

export interface GalleryImages {
  nodes: Node2[]
}

export interface Node2 {
  id: string
  uri: string
  mediaDetails: MediaDetails
}

export interface MediaDetails {
  height: number
  width: number
}

export interface FeaturedImage {
  node: Node3
}

export interface Node3 {
  uri: string
  mediaDetails: MediaDetails2
  id: string
}

export interface MediaDetails2 {
  height: number
  width: number
}

export interface ProductCategories {
  nodes: Node4[]
}

export interface Node4 {
  slug: string
}

export interface PageInfo {
  hasNextPage: boolean
  endCursor: string
}

export interface Extensions {
  debug: Debug[]
}

export interface Debug {
  type: string
  message: string
}
