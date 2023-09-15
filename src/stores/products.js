import { derived, writable } from 'svelte/store';
import local_products from '../localProducts';
import getProducts from '../strapi/getProducts';
import URL from '../strapi/URL';

const store = writable([], () => {
    handleProduct();
    return () => {};
});

async function handleProduct() {
    let products = await getProducts();
    if (products) {
        products = flattenObj(products?.data);
        store.set(products);
    }
}

function flattenObj(list) {
    list?.map(item => console.log(item))
    return list?.map(item => ({
        ...item?.attributes,
        id: item?.id,
        image:`${URL}${item?.attributes?.image?.data?.attributes?.url}`,
    }))
}
// subscribe
// set
// update
export const featuredStore = derived(store, $featured => {
    return $featured.filter(item => item.featured);
});

export default store;
