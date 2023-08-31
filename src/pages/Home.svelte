<script>
    import { link } from 'svelte-routing';
import Hero from '../components/Hero.svelte';
  import FeaturedProducts from '../components/products/FeaturedProducts.svelte';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<Hero>
    <a href="/products" use:link class="btn btn-primary btn-hero">
       shop now
    </a>
</Hero>
<FeaturedProducts title="featured products" />
