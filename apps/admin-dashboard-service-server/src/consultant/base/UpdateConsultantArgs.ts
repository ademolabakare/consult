/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConsultantWhereUniqueInput } from "./ConsultantWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ConsultantUpdateInput } from "./ConsultantUpdateInput";

@ArgsType()
class UpdateConsultantArgs {
  @ApiProperty({
    required: true,
    type: () => ConsultantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConsultantWhereUniqueInput)
  @Field(() => ConsultantWhereUniqueInput, { nullable: false })
  where!: ConsultantWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ConsultantUpdateInput,
  })
  @ValidateNested()
  @Type(() => ConsultantUpdateInput)
  @Field(() => ConsultantUpdateInput, { nullable: false })
  data!: ConsultantUpdateInput;
}

export { UpdateConsultantArgs as UpdateConsultantArgs };
