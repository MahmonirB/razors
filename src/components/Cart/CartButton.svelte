<script>
  import globalStore from '../../stores/globalStore';
  import cartStore from '../../stores/cart';
  $: total = $cartStore.reduce((acc, value) => acc + value.amount, 0);
</script>

<div class="btn-cart-container">
    <button class="btn-cart-toggle" on:click={() => globalStore.toggleItem('cart', true)}>
        <i class="fas fa-cart-plus"></i>
    </button>
    {#if total}
      <span class="btn-cart-items">{total}</span>
    {/if}
</div>