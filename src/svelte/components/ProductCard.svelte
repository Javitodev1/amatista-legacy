<script lang="ts">
  import type { Product } from '../../adapters/products/product'
  import Typographi from './Typographi.svelte'
  import StockBadge from './StockBadge.svelte'
  import { link } from 'svelte-spa-router'
  import { formatCurreny } from '../../utils/currency'
  import { NOT_FOUND_IMG_SRC } from '../errs/image'

  export let product: Product
  export let variant: 'inApp' | 'outApp'
  
  const { id, title, price, isInStock } = product
  const { width, height } = product.thumbnail
  
  const outStockImgCss = !isInStock ? 'grayscale' : ''

  const dynamicHref = (id: string) => variant === 'inApp' ? `/${id}` : `/tienda#/${id}`

  let src = product.thumbnail.src
</script>

<li
  class="p-6 transition-colors duration-300 border-2 border-transparent hover:border-amatista group"
>
  <a
    href={dynamicHref(id)}
    use:link
  >
    <div
      class="w-full h-auto mb-2 overflow-hidden aspect-square relative"
    >
      <picture>
        <source src={src} type="image/webp">
        <img
          {src}
          {width}
          {height}
          alt={id}
          class="object-center w-auto h-full mx-auto transition-transform duration-500 group-hover:scale-105 {outStockImgCss}"
          on:error={() => src = NOT_FOUND_IMG_SRC}
        />
      </picture>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <StockBadge {isInStock} variant={'JUST_OUT_STOCK'}/>
      </div>
    </div>
    <div class="flex flex-col items-center text-center">
      <Typographi as='h3' variant={'BODY_TITLE'} color={'BLACK'} darkColor={'WHITE'} className={'group-hover:text-amatista transition-colors duration-200'}>{title}</Typographi>
      <Typographi as='p' variant={'BODY'} color={'BLACK'} darkColor={'WHITE'} className={'mb-2'}>{formatCurreny(price)}</Typographi>
    </div>
  </a>
</li>
