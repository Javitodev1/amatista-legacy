<script lang="ts">
  import { CATEGORIES } from '../../adapters/products/category'
  import FilterItem from './FilterItem.svelte'
</script>

<div class="py-8 overflow-x-auto">
  <ul class="flex gap-8 justify-center min-w-fit px-12 sm:px-0">
    {#each Object.values(CATEGORIES) as filter (filter.type)}
    <li>
      <FilterItem
        {filter}
      />
    </li>
    {/each}
  </ul>
</div>