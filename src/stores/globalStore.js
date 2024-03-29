import { writable } from 'svelte/store';

const globalStore = writable({
    sidebar: false,
    cart: false,
    alert: { text: '', severity: '' }
});

const store = {
    subscribe: globalStore.subscribe,
    toggleItem: (item, value) => {
        globalStore.update(storeValues => {
            return {
                ...storeValues,
                [item]: value
            }
    });
    }
};

export default store;
