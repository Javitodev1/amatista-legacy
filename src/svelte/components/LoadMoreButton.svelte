<script lang="ts">
  import { currentNode, pageInfo, pageState, PageState } from '.././stores/stores'
  import Typographi from './Typographi.svelte'

  function handlePaginationButton() {
    currentNode.set($pageInfo.endCursor)
  }
</script>

{#if $pageInfo.hasNextPage}
  <div class="flex justify-center my-12">
    {#if $pageState === PageState.READY}
      <button on:click={handlePaginationButton} class="hover:text-amatista hover:border-amatista dark:hover:text-amatista dark:hover:border-amatista text-black dark:text-white border-black dark:border-white border-4 px-12 py-4 duration-300 transition-colors active:translate-y-1">
        <Typographi as="p" variant="BODY_TITLE">cargar más</Typographi>
      </button>
    {:else if $pageState === PageState.LOADING}
      <Typographi as="p" variant="BODY_TITLE" color="RESPONSIVE">cargando...</Typographi>
    {/if}
  </div>
{/if}