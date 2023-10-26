import URL from './URL';

export default async () => {
    const response = await fetch(`${URL}/api/products?populate=*`);
    const products = response.json();

    if (products.error) {
        // console.log(response.error);
    } else {
        return products;
    }
}