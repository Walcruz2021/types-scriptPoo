import { AccessType, Category } from '../model/category';
import { IsUrl, IsEnum, IsNotEmpty, Length,IsOptional,validateOrReject } from 'class-validator';
//al usar esto acordarse de habilitar "experimentalDecorators": true, en el ts-config

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'dfs';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
