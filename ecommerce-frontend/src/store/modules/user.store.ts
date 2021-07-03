import { Module, getModule } from "vuex-module-decorators";
import store from "..";

import { BasicOperationsCrud } from "./basic-crud.store";

import { User, UserService } from "@/core/services/user.service";

@Module({
  name: "users",
  namespaced: true,
  dynamic: true,
  store,
})
class UserStore extends BasicOperationsCrud<User> {
  constructor() {
    super(new UserService().service);
  }
}

export default getModule(UserStore);
