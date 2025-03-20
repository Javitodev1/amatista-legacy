<script lang="ts">
  import Typographi from "./Typographi.svelte"
  enum VariantClasses {
    DEFAULT,
    JUST_OUT_STOCK,
    JUST_IN_STOCK,
  }

  export let isInStock: boolean
  export let variant: keyof typeof VariantClasses = 'DEFAULT'
  
  
  const colorClasses = {
    [VariantClasses.DEFAULT]: isInStock ? "bg-amatista" : "bg-neutral-600",
    [VariantClasses.JUST_IN_STOCK]: isInStock ? "bg-amatista" : "hidden",
    [VariantClasses.JUST_OUT_STOCK]: !isInStock ? "bg-neutral-600" : "hidden",
  }
  
  const content = isInStock ? "Disponible" : "Agotado"
  const colorClass = colorClasses[VariantClasses[variant]]
</script>

<Typographi as={'span'} color={'WHITE'} variant={'BODY'} className={`px-3 py-1 rounded-full ${colorClass}`}>{content}</Typographi>
