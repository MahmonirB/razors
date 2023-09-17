<script>
     import { link } from 'svelte-routing';
    import user, { logout } from '../../stores/user';
    import globalStore from '../../stores/globalStore';
</script>

{#if $user.jwt}
    <a
    href="/"
    class="logout-btn"
    on:click={() => {
        logout();
        globalStore.toggleItem('sidebar', false);
        }}
    use:link>logout</a>
    {:else}
    <a
    href="/login"
    class="logout-btn"
    on:click={() => globalStore.toggleItem('sidebar', false)}
    use:link>login</a>
{/if}
