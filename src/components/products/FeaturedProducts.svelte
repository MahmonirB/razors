<script>
    import products from '../../stores/defaultProducts';
    import Loading from '../Loading.svelte';
    import ProductsItem from './ProductsItem.svelte';
    export let title = '';
    $: featured = $products.filter(item => item.featured);
</script>

{#if featured.length}
<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        {#each featured as product (product.id)}
            <ProductsItem {product} />
        {/each}
    </div>
</section>
{:else}
   <Loading />
{/if}
