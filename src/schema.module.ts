import {Module} from "@nestjs/common";
import {UserModule} from "./schema/user/user.module";
import {ProductModule} from "./schema/product/product.module";

@Module({
    imports: [
       UserModule, ProductModule
    ],
    controllers: [],
    providers: [],
})

export class schemaModule {}