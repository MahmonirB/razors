<script>
    import { link } from "svelte-routing";
    import links from "../../constants/links";
  import CartButton from "../Cart/CartButton.svelte";
  </script>
  
  <nav class="navbar">
      <div class="nav-center">
          <!-- sidebar toggle -->
          <ul class="nav-links">
              {#each links as linkItem}
              <li>
                  <a href={linkItem.url} use:link>{linkItem.text}</a>
              </li>
              {/each}
          </ul>
          <!-- logo -->
          <a class="nav-logo" href="/" use:link>
              <img src="/assets/images/logo.svg" alt="razors logo" />
          </a>
          <!-- cart button -->
          <CartButton />
      </div>
  </nav>