import { writable, get } from "svelte/store"
import { CATEGORIES } from "@/adapters/products/category"
import type { PageInfo, Product } from "@/adapters/products/product"
import { WPAdapter } from "@/adapters/products/wp_adapter"
import { querystring } from 'svelte-spa-router'

const DEFAULT_PAGE_SIZE = 12

const DEFAULT_PAGE_INFO = {
  endCursor: "",
  hasNextPage: false,
} satisfies PageInfo as PageInfo

export enum PageState {
  LOADING,
  READY,
  ERROR,
}

export const pageState = writable(PageState.READY)

export const pageSize = writable(DEFAULT_PAGE_SIZE)
export const activeFilter = writable(CATEGORIES.all)
export const currentNode = writable('')

export const products = writable([] as Product[])
export const pageInfo = writable(DEFAULT_PAGE_INFO)

querystring.subscribe((query) => {
  const urlSearch = new URLSearchParams(query)
  const filter = urlSearch.get('filter') as keyof typeof CATEGORIES
  const newActiveFilter = CATEGORIES[filter] ?? CATEGORIES.all
  currentNode.set('')
  activeFilter.set(newActiveFilter)
})

activeFilter.subscribe(($activeFilter) => {
  currentNode.set('')
  const $pageSize = get(pageSize)
  pageState.set(PageState.LOADING)
  WPAdapter.getGalleryProducts($pageSize, "", $activeFilter)
    .then(({products: $products, pageInfo: $pageInfo}) => {
      products.set($products)
      pageInfo.set($pageInfo)
      pageState.set(PageState.READY)
    })
    .catch(() => pageState.set(PageState.ERROR))
})

currentNode.subscribe(($currentNode) => {
  if (!$currentNode) return

  const $pageSize = get(pageSize)
  const $activeFilter = get(activeFilter)
  pageState.set(PageState.LOADING)
  WPAdapter.getGalleryProducts($pageSize, $currentNode, $activeFilter)
    .then(({products: $products, pageInfo: $pageInfo}) => {
      products.update((prevProducts) => prevProducts.concat($products))
      pageInfo.set($pageInfo)
      pageState.set(PageState.READY)
    })
    .catch(() => pageState.set(PageState.ERROR))
})