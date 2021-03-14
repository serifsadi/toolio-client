const API_URL = "http://localhost:3000/products";

export default class ProductsService {
  static async fetchProducts(keyword) {
    let url = API_URL;

    if (keyword) {
      url = `${API_URL}?keyword=${keyword}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const products = await response.json();

    return products;
  }
}
