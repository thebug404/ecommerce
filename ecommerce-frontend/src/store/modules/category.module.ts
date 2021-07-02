import * as VuexDecorators from "vuex-module-decorators";
import store from "..";

import * as Service from "@/core/services/categories/category.service";
import { Id } from "@feathersjs/feathers";

@VuexDecorators.Module({
  name: "category",
  namespaced: true,
  dynamic: true,
  store: store,
})
class CategoryModule extends VuexDecorators.VuexModule {
  private categoryService = new Service.CategoryService();
  editedItem: Partial<Service.Category> = {};
  categories: Array<Service.Category> = [];
  editedIndex = -1;
  dialog = false;

  @VuexDecorators.Mutation
  SET_DIALOG(payload: Record<string, any>): void {
    this.dialog = payload.status;
    this.editedIndex = this.categories.indexOf(payload.data);
    this.editedItem = Object.assign({}, payload.data);
  }

  @VuexDecorators.Mutation
  SET_ONE_CATEGORY(category: Service.Category): void {
    const result: Service.Category | undefined = this.categories.find(
      (item) => item._id === category._id
    );
    if (!result) this.categories.push(category);
  }

  @VuexDecorators.Mutation
  SET_UPDATE_CATEGORY(payload: Service.Category): void {
    const index: number = this.categories.findIndex(
      (category) => category._id === payload._id
    );
    if (index >= 0) this.categories.splice(index, 1, payload);
  }

  @VuexDecorators.Mutation
  REMOVE_CATEGORY(categoryId: Id): void {
    const index: number = this.categories.findIndex(
      (item) => item._id === categoryId
    );
    if (index >= 0) this.categories.splice(index, 1);
  }

  @VuexDecorators.Action
  openDialog(data: Partial<Service.Category>): void {
    this.context.commit("SET_DIALOG", { status: true, data });
  }

  @VuexDecorators.Action
  async create(data: Omit<Service.Category, "_id">) {
    try {
      const category = await this.categoryService.create(data);
      this.context.commit("SET_ONE_CATEGORY", category);
    } catch (error) {
      console.error(error);
    }
  }

  @VuexDecorators.Action
  async getList() {
    try {
      const result = await this.categoryService.list();
      result.data.forEach((category) =>
        this.context.commit("SET_ONE_CATEGORY", category)
      );
    } catch (error) {
      console.error(error);
    }
  }

  @VuexDecorators.Action
  async update(data: Service.Category): Promise<void> {
    try {
      const category: Service.Category = await this.categoryService.update(
        data._id,
        data
      );
      this.context.commit("SET_UPDATE_CATEGORY", category);
    } catch (error) {
      console.log(error);
    }
  }

  @VuexDecorators.Action
  async remove(categoryId: Id) {
    try {
      const category: Service.Category = await this.categoryService.remove(
        categoryId
      );
      this.context.commit("REMOVE_CATEGORY", category._id);
    } catch (error) {
      console.error(error);
    }
  }
}

export default VuexDecorators.getModule(CategoryModule);
