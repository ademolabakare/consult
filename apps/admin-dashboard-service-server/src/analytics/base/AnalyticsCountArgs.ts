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
import { AnalyticsWhereInput } from "./AnalyticsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AnalyticsCountArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyticsWhereInput,
  })
  @Field(() => AnalyticsWhereInput, { nullable: true })
  @Type(() => AnalyticsWhereInput)
  where?: AnalyticsWhereInput;
}

export { AnalyticsCountArgs as AnalyticsCountArgs };
