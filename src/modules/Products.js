import { api } from "./network";

const Products = {
  async index() {
    try {
      const { data } = await api.get("/products", {
        params: { media_file: true }
      });
      return data;
    } catch (error) {
      return error;
    }
  }
};

export default Products;
