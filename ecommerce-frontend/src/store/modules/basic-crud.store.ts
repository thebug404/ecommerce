import { Query, Paginated, Service, Id } from "@feathersjs/feathers";
import * as VuexDecorators from "vuex-module-decorators";

import * as GeneralStore from "../interfaces/store.interfaces";

import { standarizePromise } from "@/core/helpers/standarizePromise";

export abstract class BasicOperationsCrud<
  T extends GeneralStore.EntityKey
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
  REMOVE_ITEM(payload: T): void {
    const index: number = this.items.findIndex(
      (item) => item._id === payload._id
    );
    if (index >= 0) this.items.splice(index, 1);
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
    const [result, error] = await standarizePromise(this.service.create(data));
    if (!result) return console.error(error);
    this.context.commit("SET_NEW_ITEM", result);
  }

  @VuexDecorators.Action
  async find(query: Query): Promise<void> {
    const [result, error] = await standarizePromise(
      this.service.find({ query }) as Promise<Paginated<T>>
    );
    if (!result) return console.log(error);
    result.data.forEach((item) => this.context.commit("SET_NEW_ITEM", item));
  }

  @VuexDecorators.Action
  async update(payload: T): Promise<void> {
    const [entity, error] = await standarizePromise(
      this.service.update(payload._id, payload)
    );
    if (!entity) return console.error(error);
    this.context.commit("SET_CHANGE_ITEM", entity);
  }

  @VuexDecorators.Action
  async patch(payload: Partial<T>): Promise<void> {
    const [entity, error] = await standarizePromise(
      this.service.patch(payload._id as string, payload)
    );
    if (!entity) return console.error(error);
    this.context.commit("SET_CHANGE_ITEM", entity);
  }

  @VuexDecorators.Action
  async remove(id: Id): Promise<void> {
    const [entity, error] = await standarizePromise(this.service.remove(id));
    if (!entity) return console.error(error);
    this.context.commit("REMOVE_ITEM", entity._id);
  }

  @VuexDecorators.Action
  watchStateEntity(event: GeneralStore.TypesActions): void {
    const action = GeneralStore.events[event];
    this.service.on(action.event, (payload: T) =>
      this.context.commit(action.commit, payload)
    );
  }
}
