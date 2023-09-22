<script>
    import { onMount } from 'svelte';
    import { navigate, link} from 'svelte-routing';
    import user from '../stores/user';
    import { cartTotal } from '../stores/cart';
    let name = "";
    $: isEmpty = !name;
    onMount(() => {
        if (!$user.jwt) {
            navigate("/");
        }
    });
    function handleSubmit() {

    }
</script>

<svelte:head>
    <title>Checkout</title>
</svelte:head>

{#if Number($cartTotal) > 0}
  <section class="form">
    <h2 class="section-title">checkout</h2>
    <form class="checkout-form" on:submit|preventDefault={handleSubmit}>
        <h3>order total: ${$cartTotal}</h3>
        <!-- single input -->
        <div class="form-control">
            <label for="name">Your name:</label>
            <input type="text" id="name" bind:value={name}>
        </div>

        {#if isEmpty}
        <p class="form-empty">Please fill out name field</p>
        {/if}

        <button
        type="submit"
        class="btn btn-block btn-primary"
        disabled={isEmpty}
        class:disabled={isEmpty}
        >Submit
    </button>
    </form>
  </section>
{:else}
<div class="checkout-empty">
   <h2>Your cart is empty</h2>
   <a href="/products" class="btn btn-primary" use:link>
    fill it
   </a>
</div>
{/if}
