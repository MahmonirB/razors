<script>
  import { link } from "svelte-routing";
  import links from "../../constants/links";
  import { fade, fly } from 'svelte/transition';
  import globalStore from '../../stores/globalStore';
  let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container" transition:fly={{ x:-1000 }}>
    <div class="sidebar" transition:fade={{ delay: 400 }}>
        <!-- header -->
        <div class="sidebar-header">
            <button class="btn-close" on:click={() => closeSidebar('sidebar', false)}>
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