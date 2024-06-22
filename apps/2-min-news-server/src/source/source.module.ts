import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SourceModuleBase } from "./base/source.module.base";
import { SourceService } from "./source.service";
import { SourceController } from "./source.controller";
import { SourceResolver } from "./source.resolver";

@Module({
  imports: [SourceModuleBase, forwardRef(() => AuthModule)],
  controllers: [SourceController],
  providers: [SourceService, SourceResolver],
  exports: [SourceService],
})
export class SourceModule {}
