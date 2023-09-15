<script>
    import products from '../../stores/products';
  import Loading from '../Loading.svelte';
  import ProductsItem from './ProductsItem.svelte';
    export let title = '';
</script>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        {#each $products as product (product.id)}
            <ProductsItem {product} />
        {:else}
            <Loading />
        {/each}
    </div>
</section>
