export enum Categories {
  ALL = 'all',
  ABRIGOS = "abrigos",
  ACCESORIOS_Y_CALZADO = "accesorios-y-calzado",
  BLUSAS_Y_CAMISAS = "blusas-y-camisas",
  GANGAS = "gangas",
  SHORTS_Y_PANTALONES = "shorts-y-pantalones",
  VESTIDOS_Y_POLLERAS = "vestidos-y-polleras",
}

function createFilter( id: string, name: string ) {
  return {id, name}
}

export const filters = [
  createFilter(Categories.ALL, 'Todo'),
  createFilter(Categories.ABRIGOS, "Abrigos"),
  createFilter(Categories.ACCESORIOS_Y_CALZADO, "Accesorios & Calzado"),
  createFilter(Categories.BLUSAS_Y_CAMISAS, "Blusas & Camisas"),
  createFilter(Categories.GANGAS, "Gangas"),
  createFilter(Categories.SHORTS_Y_PANTALONES, "Shorts & Pantalones"),
  createFilter(Categories.VESTIDOS_Y_POLLERAS, "Vestidos & Polleras"),
]

export const mappedFilters = {
  [Categories.ALL]: 'Todo',
  [Categories.ABRIGOS]: "Abrigos",
  [Categories.ACCESORIOS_Y_CALZADO]: "Accesorios & Calzado",
  [Categories.BLUSAS_Y_CAMISAS]: "Blusas & Camisas",
  [Categories.GANGAS]: "Gangas",
  [Categories.SHORTS_Y_PANTALONES]: "Shorts & Pantalones",
  [Categories.VESTIDOS_Y_POLLERAS]: "Vestidos & Polleras",
}