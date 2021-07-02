import { Product, ProductService } from "@/core/services/product.service";
import * as VuexDecorators from "vuex-module-decorators";
import store from "..";

import { BasicOperationsCrud } from "./basic-crud.store";

@VuexDecorators.Module({
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

export default VuexDecorators.getModule(ProductStore);
