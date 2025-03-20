export function formatCurreny(price: number) {
  return `$ ${price}`
}

export function encodeWspLink(href: string) {
  return href
    .replaceAll('#', '%23')
    .replaceAll('=', '%3D')
    .replaceAll('/', '%2F')
}

