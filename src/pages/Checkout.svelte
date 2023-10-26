<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { navigate, link} from 'svelte-routing';
    import user from '../stores/user';
    import cart, { cartTotal } from '../stores/cart';
  import submitOrder from '../strapi/submitOrder';
    let name = "";
    let cardElement;
    let card;
    let elements;
    let stripe;
    let cardErrors;
    $: isEmpty = !name;
    onMount(() => {
        if (!$user.jwt) {
            navigate("/");
            return;
        }
        if (Number($cartTotal) > 0) {
            stripe = Stripe('pk_test_51NtbNqBbDFcz6aykCwEkLLS9QYySmFO5j59ot1d72f0itK4lJnSwsFqWzn7N0sJjIZWq8sK1xoQnqxPDZYskmVZK004ttJXRmR');
            elements = stripe.elements();
            card = elements.create('card');
            card.mount(cardElement);
        }
    });
    async function handleSubmit() {
        const response = await stripe.createToken(card);
          const { token } = response;
         if (token) {
            let order = await submitOrder({ name, total: Number($cartTotal), items: $cart, strapiToken: token.id, userToken: $user.jwt });
          }
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

        <div class="stripe-input">
            <label for="card-element">Credit or Debit Card</label>
            <p class="stripe-info">Test using this credit card:
              <span>4242 4242 4242 4242</span>
              <br />enter any 5 digits for the zip code
              <br />enter any 3 digits for the CVC
            </p>
            <div id="card-element" bind:this={cardElement}>

            </div>
            <div id="card-errors" bind:this={cardErrors} role="alert"/>
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
