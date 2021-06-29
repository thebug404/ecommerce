import { EcommerceServer } from "./app/main";

const ecommerce: EcommerceServer = new EcommerceServer;
ecommerce.run();
ecommerce.database();
