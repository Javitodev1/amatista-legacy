<script lang="ts">
  import Typographi from './Typographi.svelte';
  import { link } from 'svelte-spa-router'
  import { Category } from '../../adapters/products/category'
  import { activeFilter } from '../stores/stores';

  export let filter: Category

  $: activeCss = $activeFilter.type === filter.type
      ? 'text-amatista dark:text-amatista after:w-full'
      : 'text-black dark:text-white after:w-0'
</script>


<a
  use:link
  href="/?filter={filter.slug}"
  class="{activeCss} relative after:transition-[width] after:duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:bg-amatista hover:after:w-full hover:text-amatista dark:hover:text-amatista"
  >
  <Typographi as={'p'} variant={'BODY'} className={'whitespace-nowrap'}>
    {filter.display}
  </Typographi>
</a
>

