import * as graphql from "@nestjs/graphql";
import { ConsultantResolverBase } from "./base/consultant.resolver.base";
import { Consultant } from "./base/Consultant";
import { ConsultantService } from "./consultant.service";

@graphql.Resolver(() => Consultant)
export class ConsultantResolver extends ConsultantResolverBase {
  constructor(protected readonly service: ConsultantService) {
    super(service);
  }
}
