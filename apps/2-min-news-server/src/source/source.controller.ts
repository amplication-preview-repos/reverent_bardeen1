import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SourceService } from "./source.service";
import { SourceControllerBase } from "./base/source.controller.base";

@swagger.ApiTags("sources")
@common.Controller("sources")
export class SourceController extends SourceControllerBase {
  constructor(
    protected readonly service: SourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
