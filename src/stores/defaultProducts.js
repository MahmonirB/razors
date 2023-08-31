import { derived, writable } from 'svelte/store';
import local_products from '../localProducts';

const store = writable(flattenObj([...local_products]));

function flattenObj(list) {
    return list.map(item => ({
        ...item,
        image: item.image.url,
    }))
}
// subscribe
// set
// update
export const featuredStore = derived(store, $featured => {
    return $featured.filter(item => item.featured);
});

export default store;
