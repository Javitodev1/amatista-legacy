const { PUBLIC_WP_API } = import.meta.env

export function createConfig(query: string) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query }),
  }
}

export function graphqlQuery(query: string) {
  const config = createConfig(query)
  return fetch(PUBLIC_WP_API, config)
}
