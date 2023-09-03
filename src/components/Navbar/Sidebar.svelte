<script>
  import { link } from "svelte-routing";
  import links from "../../constants/links";


</script>

<div class="sidebar-container">
    <div class="sidebar">
        <!-- header -->
        <div class="sidebar-header">
            <button class="btn-close">
                <i class="fas fa-window-close"/>
            </button>
        </div>
         <!-- logo -->
         <a class="nav-logo" href="/" use:link>
            <img src="/assets/images/logo.svg" class="logo sidebar-logo" alt="razors logo" />
        </a>
        <!-- links -->
        <ul class="nav-links nav-aside">
            {#each links as linkItem}
            <li>
                <a
                href={linkItem.url}
                on:click={() => {}}
                use:link
                >{linkItem.text}</a>
            </li>
            {/each}
        </ul>
    </div>
</div>