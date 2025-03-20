import { catchFecthInMemory } from "./cacheMemory"
import { GET_LATEST_PRODUCTS, GET_PRODUCT_BY_ID, GET_PRODUCTS } from "./queries"
import { type Product, type ProductTag, type Data } from "@/types/api"

const HYGRAPH_ENDPOINT = import.meta.env.PUBLIC_HYGRAPH_ENDPOINT

function createGraphConfig(query: string) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  }
}

export async function hygraphQuery({
  query,
  expireTimeInMinutes = 10,
}: {
  query: string
  expireTimeInMinutes?: number
}) {
  const config = createGraphConfig(query)
  return catchFecthInMemory(
    new Promise<any>((resolve, reject) => {
      fetch(HYGRAPH_ENDPOINT, config)
        .then((response) => {
          if (!response.ok)
            reject(
              "Error al comunicarse con el servidor, porfavor intente mas tárde."
            )
          return response.json()
        })
        .then((json) => json.data)
        .then((data) => resolve(data))
    }),
    query,
    expireTimeInMinutes
  )
}

export async function fetchProductById(id: string): Promise<{
  producto: Product
}> {
  return hygraphQuery({
    query: GET_PRODUCT_BY_ID(id),
  })
}

export async function fetchProductsByTag(
  tag: ProductTag | null,
  cursor: string | null
): Promise<Data> {
  return hygraphQuery({
    query: GET_PRODUCTS(tag, cursor),
  })
}

export async function fetchLatestProducts(n = 8): Promise<{
  productos: Product[]
}> {
  return hygraphQuery({
    query: GET_LATEST_PRODUCTS(n),
  })
}