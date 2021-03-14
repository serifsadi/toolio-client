export default class ProductsService {
  static async fetchProducts(keyword) {
    let url = `${process.env.VUE_APP_API_URL}/products`;

    if (keyword) {
      url += `?keyword=${keyword}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const products = await response.json();

    return products;
  }
}
