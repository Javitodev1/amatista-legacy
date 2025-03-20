export interface APIResponse {
  data: Data
}

export interface Data {
  productosConnection: ProductosConnection
}

export interface ProductosConnection {
  edges: Edge[]
  pageInfo: PageInfo
}

export interface Edge {
  cursor: string
  node: Product
}

export interface Product {
  description: string
  id: string
  price: number
  size: string
  stock: number
  tag: string[]
  title: string
  miniatura: Image
  backImg: Image
  middleImg: Image
  frontImg: Image
}

export interface Image {
  url: string
  id: string
}

export interface PageInfo {
  endCursor: string
  hasNextPage: boolean
}

export enum ProductSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  T34 = "34",
  T35 = "35",
  T36 = "36",
  T37 = "37",
  T38 = "38",
  T39 = "39",
  T40 = "40",
  T41 = "41",
  T42 = "42",
  T43 = "43",
}

export enum ProductTag {
  Todo = "Todo",
  Gangas = "Gangas",
  Abrigos = "Abrigos",
  Shorts_y_Pantalones = "Shorts_Y_Pantalones",
  Vestidos_y_Polleras = "Vestidos_Y_Polleras",
  Accesorios_y_Calzado = "Accesorios_Y_Calzado",
  Tejido_Artesanal = "Tejido_Artesanal",
  Blusas_y_Camisas = "Blusas_Y_Camisas",
}
