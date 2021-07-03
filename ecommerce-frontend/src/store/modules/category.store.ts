import * as VuexDecorators from "vuex-module-decorators";
import store from "..";

import * as ServiceCategory from "../../core/services/category.service";

import { BasicOperationsCrud } from "./basic-crud.store";

@VuexDecorators.Module({
  name: "category",
  namespaced: true,
  dynamic: true,
  store: store,
})
class CategoryStore extends BasicOperationsCrud<ServiceCategory.Category> {
  constructor() {
    super(new ServiceCategory.CategoryService().service);
  }
}

export default VuexDecorators.getModule(CategoryStore);
