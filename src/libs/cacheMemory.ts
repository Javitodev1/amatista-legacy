export interface InCacheMemory {
  expireAt: number
  data: any
}

export function createCacheMemory(data: JSON, expireTimeInMinutes: number) {
  const createdAt = new Date()
  const expireAt = new Date().setMinutes(
    createdAt.getMinutes() + expireTimeInMinutes
  )

  return {
    expireAt: expireAt.valueOf(),
    data: data as JSON,
  } satisfies InCacheMemory
}

export async function catchFecthInMemory(
  fetchPromise: Promise<any>,
  query: string,
  expireTimeInMinutes: number
) {
  return new Promise<any>((resolve, reject) => {
    // Looking for data in cache
    const queryInCache = localStorage.getItem(query)
    if (queryInCache) {
      const cacheInMemory = JSON.parse(queryInCache) as InCacheMemory
      const currentTime = new Date().valueOf()

      if (currentTime < cacheInMemory.expireAt) {
        return resolve(cacheInMemory.data)
      } else {
        localStorage.removeItem(query)
      }
    }

    // Fetching Data
    fetchPromise
      .then((data) => {
        const cache = createCacheMemory(data, expireTimeInMinutes)
        localStorage.setItem(query, JSON.stringify(cache))
        resolve(data)
      })
      .catch((reason) => reject(reason))
  })
}
