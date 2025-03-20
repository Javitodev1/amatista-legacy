export interface ApiResponse {
  data: Data
}

export interface Data {
  products: Products
}

export interface Products {
  data: Daum[]
}

export interface Daum {
  id: string
  attributes: Attributes
}

export interface Attributes {
  slug: string
  title: string
  description: string
  price: number
  stock: number
  images: Images
  categories: Categories
  thumbnail: Thumbnail
}

export interface Images {
  data: Daum2[]
}

export interface Daum2 {
  id: string
  attributes: Attributes2
}

export interface Attributes2 {
  url: string
  width: number
  height: number
}

export interface Categories {
  data: Daum3[]
}

export interface Daum3 {
  attributes: Attributes3
}

export interface Attributes3 {
  Tag: string
}

export interface Thumbnail {
  data: Data2
}

export interface Data2 {
  id: string
  attributes: Attributes4
}

export interface Attributes4 {
  url: string
  width: number
  height: number
}
