export enum CategoryType {
  ALL,
  ABRIGOS,
  ACCESORIOS_Y_CALZADO,
  BLUSAS_Y_CAMISAS,
  GANGAS,
  SHORTS_Y_PANTALONES,
  VESTIDOS_Y_POLLERAS,
  UNCATEGORIZED,
}

export class Category {
  readonly type: CategoryType
  readonly slug: string // <- for URL filters
  readonly display: string // <- display name for app

  constructor({
    type,
    slug,
    display,
  }: {
    type: CategoryType
    slug: string
    display: string
  }) {
    this.type = type
    this.slug = slug
    this.display = display
  }
}

export const CATEGORIES = Object.freeze({
  all: new Category({ type: CategoryType.ALL, slug: 'all', display: 'Todo' }),
  abrigos: new Category({
    type: CategoryType.ABRIGOS,
    slug: 'abrigos',
    display: 'Abrigos',
  }),
  'accesorios-y-calzado': new Category({
    type: CategoryType.ACCESORIOS_Y_CALZADO,
    slug: 'accesorios-y-calzado',
    display: 'Accesorios & Calzado',
  }),
  'blusas-y-camisas': new Category({
    type: CategoryType.BLUSAS_Y_CAMISAS,
    slug: 'blusas-y-camisas',
    display: 'Blusas & Camisas',
  }),
  gangas: new Category({
    type: CategoryType.GANGAS,
    slug: 'gangas',
    display: 'Gangas',
  }),
  'shorts-y-pantalones': new Category({
    type: CategoryType.SHORTS_Y_PANTALONES,
    slug: 'shorts-y-pantalones',
    display: 'Shorts & Pantalones',
  }),
  'vestidos-y-polleras': new Category({
    type: CategoryType.VESTIDOS_Y_POLLERAS,
    slug: 'vestidos-y-polleras',
    display: 'Vestidos & Polleras',
  }),
})
