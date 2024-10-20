export class ProductService {
  apiUrl = "http://localhost:3000/products";

  async getProducts(filterData) {
    return await fetch(`${this.apiUrl}/filter`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterData),
    }).then((res) => res.json());
  }

  async getSearchedProducts(filterData) {
    return await fetch(`${this.apiUrl}/search`, filterData).then((res) =>
      res.json()
    );
  }

  async getProductById(id) {
    return await fetch(`${this.apiUrl}/${id}`).then((res) => res.json());
  }

  async getCategories() {
    return await fetch(`http://localhost:3000/categories`).then((res) =>
      res.json()
    );
  }
}

const productService = new ProductService();
export default productService;
