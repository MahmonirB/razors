<script>
  import { link } from "svelte-routing";
  import CartButton from "../Cart/CartButton.svelte";

</script>

<nav class="navbar">
    <div class="nav-center">
        <!-- sidebar toggle -->
        <button class="btn-sidebar-toggle">
            <i class="fas fa-bars" />
        </button>
        <!-- logo -->
        <a class="nav-logo" href="/" use:link>
            <img src="/assets/images/logo.svg" alt="razors logo" />
        </a>
        <!-- cart button -->
        <CartButton />
    </div>
</nav>
