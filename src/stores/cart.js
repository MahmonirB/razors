import { writable, derived } from "svelte/store";
import localCart from "../localCart";

const cart = writable([]);

export const cartTotal = derived(cart, ($cartList) => {
  const total = $cartList.reduce((acc, value) => {
    return (acc += value.amount * value.price);
  }, 0);
  return total.toFixed(2);
});

const remove = (id, items) => {
  return items.filter((item) => item.id !== id);
};

const handleAmount = (id, items, action) => {
  return items.map((item) => {
    let newAmount;

    if (action === "inc") newAmount = item.amount + 1;
    if (action === "dec") newAmount = item.amount - 1;
    else item.amount;

    return {
      ...item,
      amount: item.id === id ? newAmount : item.amount,
    };
  });
};

export const removeItem = (id) => {
  cart.update((storeValue) => remove(id, storeValue));
};

export const increaseCount = (id) => {
  cart.update((storeValue) => handleAmount(id, storeValue, "inc"));
};

export const decreaseCount = (id, amount) => {
  cart.update((storeValue) => {
    let newCart;
    if (amount === 1) {
      newCart = remove(id, storeValue);
    } else {
      newCart = handleAmount(id, storeValue, "dec");
    }
    return [...newCart];
  });
};

export const setStorageCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const getStorageCart = () => {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
}

export const addToCart = (product) => {
  cart.update(storedList => {
    const item = storedList.find(element => element.id === product.id);
    let newCart;
    if (item) {
      newCart = increaseCount(product.id, storedList, 'inc');
    } else {
      newCart = [...storedList, { ...product, amount: 1 }];
    }
    return newCart;
  });
}

export default cart;
