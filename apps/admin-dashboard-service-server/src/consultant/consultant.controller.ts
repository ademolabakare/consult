import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsultantService } from "./consultant.service";
import { ConsultantControllerBase } from "./base/consultant.controller.base";

@swagger.ApiTags("consultants")
@common.Controller("consultants")
export class ConsultantController extends ConsultantControllerBase {
  constructor(protected readonly service: ConsultantService) {
    super(service);
  }
}
