import { graphqlQuery } from '../../libs/graphql'

export class WPQueries {
  static GET_GALLERY_PRODUCTS = async (
    first: number,
    afterCursor: string,
    categoryIn: string | null,
  ) => {
    const query = `
    query getGalleryProducts {
      products(after: "${afterCursor}", first: ${first}, where: {categoryIn: ${
      !categoryIn ? null : `"${categoryIn}"`
    }}) {
        edges {
          cursor
          node {
            ... on SimpleProduct {
              id
              name
              featuredImage {
                node {
                  id
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
                }
              }
              price(format: RAW)
              stockStatus
              productCategories {
                nodes {
                  slug
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }`
    return graphqlQuery(query)
  }

  static GET_PRODUCT_BY_ID = async (id: string) => {
    const query = `
    query getProductById {
      product(id: "${id}") {
        ... on SimpleProduct {
          id
          name
          description
          featuredImage {
            node {
              sourceUrl(size: WOOCOMMERCE_SINGLE)
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
              sourceUrl(size: WOOCOMMERCE_SINGLE)
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
    }`
    return graphqlQuery(query)
  }

  static GET_LATEST_PRODUCTS = async (last: number) => {
    const query = `
    query getLatestProducts {
      products(last:${last}) {
        edges {
          node {
            ... on SimpleProduct {
              id
              name
              featuredImage {
                node {
                  id
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
                }
              }
              price(format: RAW)
              stockStatus
            }
          }
        }
      }
    }`
    return graphqlQuery(query)
  }
}
