/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  MaxLength,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { PaymentCreateNestedManyWithoutConsultantsInput } from "./PaymentCreateNestedManyWithoutConsultantsInput";
import { Type } from "class-transformer";
import { EnumConsultantStatus } from "./EnumConsultantStatus";

@InputType()
class ConsultantCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutConsultantsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutConsultantsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutConsultantsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutConsultantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  specialization?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumConsultantStatus,
  })
  @IsEnum(EnumConsultantStatus)
  @IsOptional()
  @Field(() => EnumConsultantStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ConsultantCreateInput as ConsultantCreateInput };
