import { Product, ProductService } from "@/core/services/product.service";
import { Module, getModule } from "vuex-module-decorators";
import store from "..";

import { BasicOperationsCrud } from "./basic-crud.store";

@Module({
  name: "products",
  namespaced: true,
  dynamic: true,
  store,
})
class ProductStore extends BasicOperationsCrud<Product> {
  constructor() {
    super(new ProductService().service);
  }
}

export default getModule(ProductStore);
