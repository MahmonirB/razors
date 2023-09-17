<script>
import { fly, fade } from 'svelte/transition';
import globalStore from '../../stores/globalStore';
import { onMount, onDestroy } from 'svelte';
const handleClose = () => {
    globalStore.toggleItem('alert', { text: '', severity: '' });
};
</script>

<div
  class="alert-container"
  in:fly={{y:-200, duration: 1000}}
  out:fade={{ duration: 0 }}
  class:alert-danger={$globalStore.alert.severity === 'danger'}
>
<div class="alert">
<p>{$globalStore.alert.text}</p>
<button on:click={handleClose} class='alert-close'>
    <i class='fas fa-window-close'></i>
</button>
</div>

</div>

