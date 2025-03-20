export namespace LatestProducts {
  export interface Response {
    data: Data
  }

  export interface Data {
    products: Products
  }

  export interface Products {
    edges: Edge[]
  }

  export interface Edge {
    node: Node
  }

  export interface Node {
    id: string
    name: string
    featuredImage?: FeaturedImage
    price?: string
    stockStatus: string
  }

  export interface FeaturedImage {
    node: Node2
  }

  export interface Node2 {
    id: string
    mediaDetails: MediaDetails
    sourceUrl: string
  }

  export interface MediaDetails {
    height: number
    width: number
  }
}

export namespace ProductsById {
  export interface Response {
    data: Data
  }

  export interface Data {
    product: Product
  }

  export interface Product {
    id: string
    name: string
    description: string
    featuredImage: FeaturedImage
    galleryImages: GalleryImages
    price: string
    stockStatus: string
    stockQuantity: number | null
    productCategories: ProductCategories
  }

  export interface FeaturedImage {
    node: Node
  }

  export interface Node {
    sourceUrl: string
    mediaDetails: MediaDetails
    id: string
  }

  export interface MediaDetails {
    width: number
    height: number
  }

  export interface GalleryImages {
    nodes: Node2[]
  }

  export interface Node2 {
    id: string
    sourceUrl: string
    mediaDetails: MediaDetails2
  }

  export interface MediaDetails2 {
    height: number
    width: number
  }

  export interface ProductCategories {
    nodes: Node3[]
  }

  export interface Node3 {
    slug: string
  }
}

export namespace GalleryProducts {
  export interface Response {
    data: Data
  }
  
  export interface Data {
    products: Products
  }
  
  export interface Products {
    edges: Edge[]
    pageInfo: PageInfo
  }
  
  export interface Edge {
    cursor: string
    node: Node
  }
  
  export interface Node {
    id: string
    name: string
    featuredImage?: FeaturedImage
    price?: string
    stockStatus: string
    productCategories: ProductCategories
  }
  
  export interface FeaturedImage {
    node: Node2
  }
  
  export interface Node2 {
    id: string
    mediaDetails: MediaDetails
    sourceUrl: string
  }
  
  export interface MediaDetails {
    height: number
    width: number
  }
  
  export interface ProductCategories {
    nodes: Node3[]
  }
  
  export interface Node3 {
    slug: string
  }
  
  export interface PageInfo {
    hasNextPage: boolean
    endCursor: string
  }
}
