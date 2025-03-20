<script lang="ts">
  import Router from 'svelte-spa-router'
  import Shop from './Shop.svelte'
  import Product from './Product.svelte';

  const routes = {
    '/': Shop,
    '/:id': Product,
  }
</script>

<Router {routes} />