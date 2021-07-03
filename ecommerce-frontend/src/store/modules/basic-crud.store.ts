import * as VuexDecorators from "vuex-module-decorators";
import { Query, Paginated, Service, Id } from "@feathersjs/feathers";

type EntityKey = {
  _id: string;
};

export abstract class BasicOperationsCrud<
  T extends EntityKey
> extends VuexDecorators.VuexModule {
  editedItem: Partial<T> = {};
  editedIndex = -1;
  dialog = false;
  items: Array<T> = [];

  constructor(readonly service: Service<T>) {
    super({});
  }

  @VuexDecorators.Mutation
  SET_MANY_ITEMS(items: Array<T>): void {
    this.items = items;
  }

  @VuexDecorators.Mutation
  SET_NEW_ITEM(entity: T): void {
    const index: number = this.items.findIndex(
      (item) => item._id === entity._id
    );
    if (index < 0) this.items.unshift(entity);
  }

  @VuexDecorators.Mutation
  SET_CHANGE_ITEM(payload: T): void {
    const index: number = this.items.findIndex(
      (value) => value._id === payload._id
    );
    this.items.splice(index, 1, payload);
  }

  @VuexDecorators.Mutation
  REMOVE_ITEM(id: Id): void {
    const index: number = this.items.findIndex((item) => item._id === id);
    this.items.splice(index, 1);
  }

  @VuexDecorators.Mutation
  SET_DIALOG(payload: Record<string, any>): void {
    this.editedIndex = this.items.indexOf(payload.data);
    this.editedItem = Object.assign({}, payload.data);
    this.dialog = payload.status;
  }

  @VuexDecorators.Action
  showDialog(data: Partial<T>): void {
    this.context.commit("SET_DIALOG", {
      status: true,
      data,
    });
  }

  @VuexDecorators.Action
  closeDialog(): void {
    this.context.commit("SET_DIALOG", {
      status: false,
      data: {},
    });
  }

  @VuexDecorators.Action
  async create(data: Partial<T>): Promise<void> {
    try {
      const entity: T = await this.service.create(data);
      this.context.commit("SET_NEW_ITEM", entity);
    } catch (error) {
      console.error(error);
    }
  }

  @VuexDecorators.Action
  async find(query: Query): Promise<void> {
    try {
      const result = (await this.service.find(query)) as Paginated<T>;
      result.data.forEach((item) => this.context.commit("SET_NEW_ITEM", item));
    } catch (error) {
      console.error(error);
    }
  }

  @VuexDecorators.Action
  async update(payload: T): Promise<void> {
    try {
      const entity = await this.service.update(payload._id, payload);
      this.context.commit("SET_CHANGE_ITEM", entity);
    } catch (error) {
      console.error(error);
    }
  }

  @VuexDecorators.Action
  async patch(payload: Partial<T>): Promise<void> {
    try {
      const entity: T = await this.service.patch(
        payload._id as string,
        payload
      );
      this.context.commit("SET_CHANGE_ITEM", entity);
    } catch (error) {
      console.error(error);
    }
  }

  @VuexDecorators.Action
  async remove(id: Id): Promise<void> {
    try {
      const entity = await this.service.remove(id);
      this.context.commit("REMOVE_ITEM", entity._id);
    } catch (error) {
      console.error(error);
    }
  }
}
