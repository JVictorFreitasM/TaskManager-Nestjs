import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum TaskStatusEnum {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class TaskDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsUUID()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  id: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(3)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MaxLength(256)
  title: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(5)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MaxLength(512)
  description: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(TaskStatusEnum)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  status: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsDateString()
  expirationDate: Date;
}

export interface FindAllParameters {
  title: string;
  status: string;
}
