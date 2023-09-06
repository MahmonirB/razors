import { writable, derived } from "svelte/store";
import localCart from "../localCart";

const cart = writable([...localCart]);

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

export const decreaseCount = (id) => {
  cart.update((storeValue) => {
    const selectedProduct = storeValue.find((item) => item.id === id);
    let newCart;
    if (selectedProduct?.amount === 1) {
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

export default cart;
