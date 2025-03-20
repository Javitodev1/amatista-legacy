<script lang="ts">
  import { onMount } from 'svelte';
  import { CATEGORIES } from '../../adapters/products/category'
  import { querystring } from 'svelte-spa-router'
  import { activeFilter, currentNode } from '../stores/stores'

  function handleHashchange() {
    const urlSearch = new URLSearchParams($querystring)
    const filter = urlSearch.get('filter') as keyof typeof CATEGORIES
    const newActiveFilter = CATEGORIES[filter] ?? CATEGORIES.all
    activeFilter.set(newActiveFilter)
  }

  onMount(handleHashchange)
</script>

<svelte:window on:hashchange={handleHashchange} />