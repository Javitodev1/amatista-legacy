<script lang="ts">
  import type { Product } from '../../adapters/products/product'
  import ProductCard from './ProductCard.svelte';
  
  export let products: Product[]
  export let variant: 'inApp' | 'outApp'

</script>

<ul class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each products as product (product.id)}
    <ProductCard {product} {variant}/>
  {/each}
</ul>