<script lang="ts">
  import type { HTMLTag } from 'astro/types'
  import {Variants, TextColors, DarkColors} from '../../constants/typographi'

  export let as: HTMLTag
  export let variant: keyof typeof Variants
  export let color: keyof typeof TextColors = 'NONE'
  export let darkColor: keyof typeof DarkColors = 'NONE'
  export let className: string = ''

  const selectedVariant = Variants[variant]
  const selectedColor = TextColors[color]
  const selectedDarkColor = DarkColors[darkColor]
</script>


<svelte:element this={as} class={`${selectedVariant} ${selectedColor} ${selectedDarkColor} ${className}`}>
  <slot />
</svelte:element>