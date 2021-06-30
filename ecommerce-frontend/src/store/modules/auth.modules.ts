import { getModule, Module, VuexModule } from "vuex-module-decorators";
import store from "../index";

@Module({
    name: "auth",
    namespaced: true,
    dynamic: true,
    store
})
export class AuthStore extends VuexModule {}

export default getModule(AuthStore);
