<script lang="ts">
  import FilterList from './components/FilterList.svelte'
  import ProductGallery from './components/ProductGallery.svelte'
  import LoadMoreButton from './components/LoadMoreButton.svelte';
  import { products } from './stores/stores'

</script>

<FilterList />
<ProductGallery products={ $products } variant='inApp' />
<LoadMoreButton />