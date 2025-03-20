import { WPQueries } from './wp_queries'
import * as WPTypes from './wp_types'

export class ProductFetcher {
  static getGalleryProducts = async (
    first = 15,
    afterCursor = '',
    categoryIn: string | null = null
  ) => {
    return new Promise<WPTypes.GalleryProducts.Response>((resolve, reject) => {
      WPQueries.GET_GALLERY_PRODUCTS(first, afterCursor, categoryIn)
        .then((response) => {
          if (!response.ok) return reject('server error on get gallery products')
          return response.json()
        })
        .then((json) => resolve(json as WPTypes.GalleryProducts.Response))
    })
  }

  static getProductsById = async (id: string) => {
    return new Promise<WPTypes.ProductsById.Response>((resolve, reject) => {
      WPQueries.GET_PRODUCT_BY_ID(id)
        .then((response) => {
          if (!response.ok) return reject('server error on get product by id')
          return response.json()
        })
        .then((json) => resolve(json as WPTypes.ProductsById.Response))
    })
  }

  static getLatestProducts = async (last: number) => {
    return new Promise<WPTypes.LatestProducts.Response>((resolve, reject) => {
      WPQueries.GET_LATEST_PRODUCTS(last)
        .then((response) => {
          if (!response.ok) return reject('server error on get latest products')
          return response.json()
        })
        .then((json) => resolve(json as WPTypes.LatestProducts.Response))
    })
  }
}
