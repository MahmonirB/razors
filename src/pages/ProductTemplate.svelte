<script>
    import Loading from '../components/Loading.svelte';
  import { addToCart } from '../stores/cart';
    import products from '../stores/products';
    import globalStore from '../stores/globalStore.js';
  import { link } from 'svelte-routing';
    export let id = '';

    $: product = $products.find(item => item.id === parseInt(id));

    const handleAddToCart = () => {
        addToCart(product);
        globalStore.toggleItem('cart', true);
    }
</script>

<svelte:head>
    <title>{product?.title || 'product'}</title>
</svelte:head>

{#if !product}
<Loading />
{:else}
<section class="single-product">
    <a href="/products" class="btn btn-primary" use:link>back to product list</a>
    <div class="single-product-container">
        <article class="single-product-image">
            <img src={product.image} alt={product.title} />
        </article>
        <article>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <button class="btn btn-primary btn-block" on:click={handleAddToCart}>add to cart</button>
        </article>
    </div>
</section>
{/if}