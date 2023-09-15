<script>
    import { featuredStore } from '../../stores/products';
    import Loading from '../Loading.svelte';
    import ProductsItem from './ProductsItem.svelte';
    export let title = '';
</script>

{#if $featuredStore.length}
<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        {#each $featuredStore as product (product.id)}
            <ProductsItem {product} />
        {/each}
    </div>
</section>
{:else}
   <Loading />
{/if}
