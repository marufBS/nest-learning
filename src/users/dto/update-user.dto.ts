import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto.js";
import { IsNotEmptyPayload } from "../../common/decorators/is-not-empty-payload.decorator.js";

@IsNotEmptyPayload()
export class UpdateUserDto extends PartialType(CreateUserDto){}