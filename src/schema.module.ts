import {Module} from "@nestjs/common";
import {UserModule} from "./schema/user/user.module";

@Module({
    imports: [
       UserModule
    ],
    controllers: [],
    providers: [],
})

export class schemaModule {}