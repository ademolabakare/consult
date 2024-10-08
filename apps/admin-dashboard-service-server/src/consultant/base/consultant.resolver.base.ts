/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Consultant } from "./Consultant";
import { ConsultantCountArgs } from "./ConsultantCountArgs";
import { ConsultantFindManyArgs } from "./ConsultantFindManyArgs";
import { ConsultantFindUniqueArgs } from "./ConsultantFindUniqueArgs";
import { CreateConsultantArgs } from "./CreateConsultantArgs";
import { UpdateConsultantArgs } from "./UpdateConsultantArgs";
import { DeleteConsultantArgs } from "./DeleteConsultantArgs";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { ConsultantService } from "../consultant.service";
@graphql.Resolver(() => Consultant)
export class ConsultantResolverBase {
  constructor(protected readonly service: ConsultantService) {}

  async _consultantsMeta(
    @graphql.Args() args: ConsultantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Consultant])
  async consultants(
    @graphql.Args() args: ConsultantFindManyArgs
  ): Promise<Consultant[]> {
    return this.service.consultants(args);
  }

  @graphql.Query(() => Consultant, { nullable: true })
  async consultant(
    @graphql.Args() args: ConsultantFindUniqueArgs
  ): Promise<Consultant | null> {
    const result = await this.service.consultant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Consultant)
  async createConsultant(
    @graphql.Args() args: CreateConsultantArgs
  ): Promise<Consultant> {
    return await this.service.createConsultant({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Consultant)
  async updateConsultant(
    @graphql.Args() args: UpdateConsultantArgs
  ): Promise<Consultant | null> {
    try {
      return await this.service.updateConsultant({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Consultant)
  async deleteConsultant(
    @graphql.Args() args: DeleteConsultantArgs
  ): Promise<Consultant | null> {
    try {
      return await this.service.deleteConsultant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Payment], { name: "payments" })
  async findPayments(
    @graphql.Parent() parent: Consultant,
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    const results = await this.service.findPayments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
