<script>
    import { link } from 'svelte-routing';
import Hero from '../components/Hero.svelte';
</script>

<Hero>
    <a href="/products" use:link class="btn btn-primary btn-hero">
       shop now
    </a>
</Hero>