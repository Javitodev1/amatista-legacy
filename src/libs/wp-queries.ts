import { Categories } from '../data/filters'

export const WP_QUERIES = {
  GET_PRODUCTS: (
    first: number,
    category: string = Categories.ALL,
    cursor: string = ''
  ) => `
  query getProducts {
    products(
      first: ${first}
      , after: "${cursor}"
      ${
        category !== Categories.ALL
          ? `, where: {categoryIn: "${category}"}`
          : ''
      }
    ) {
      edges {
        node {
          ... on SimpleProduct {
            id
            name
            description(format: RAW)
            galleryImages(first: 2) {
              nodes {
                id
                uri
                mediaDetails {
                  height
                  width
                }
              }
            }
            featuredImage {
              node {
                uri
                mediaDetails {
                  height
                  width
                }
              }
            }
            price(format: RAW)
            slug
            stockStatus
            stockQuantity
            productCategories {
              nodes {
                slug
              }
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        startCursor
      }
    }
  }`,

  GET_PRODUCT_BY_ID: (id: string) => `
  query getProductById {
    product(id: "${id}") {
      ... on SimpleProduct {
        id
        name
        description
        featuredImage {
          node {
            uri
            mediaDetails {
              width
              height
            }
            id
          }
        }
        galleryImages(first: 2) {
          nodes {
            id
            uri
            mediaDetails {
              height
              width
            }
          }
        }
        price(format: RAW)
        slug
        stockStatus
        stockQuantity
        productCategories {
          nodes {
            slug
          }
        }
      }
    }
  }`,

  GET_LATEST_PRODUCTS: (last = 8) => `
  query getProducts {
    products(
      last: ${last}
    ) {
      edges {
        node {
          ... on SimpleProduct {
            id
            name
            description(format: RAW)
            galleryImages(first: 3) {
              nodes {
                id
                uri
                mediaDetails {
                  height
                  width
                }
              }
            }
            featuredImage {
              node {
                uri
                mediaDetails {
                  height
                  width
                }
              }
            }
            price(format: RAW)
            slug
            stockStatus
            stockQuantity
            productCategories {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  }`,
}
