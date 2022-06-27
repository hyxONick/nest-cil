import {Module} from "@nestjs/common";
import {DeviceTypeModule} from "./schema/deviceType/deviceType.module";
import {UserModule} from "./schema/user/user.module";

@Module({
    imports: [
      DeviceTypeModule,
      UserModule
    ],
    controllers: [],
    providers: [],
})

export class schemaModule {}