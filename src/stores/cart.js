import { writable, derived } from 'svelte/store';
import localCart from '../localCart';

const cart = writable([...localCart]);

export const cartTotal = derived(cart, $cartList => {
    const total = $cartList.reduce((acc, value) => { return acc += (value.amount * value.price)}, 0);
    return total.toFixed(2);
});

const remove = (id, items) => {
    return items.filter(item => item.id !== id);
} 

export const removeItem = id => {
    cart.update(storeValue => remove(id, storeValue));
}

export default cart;
