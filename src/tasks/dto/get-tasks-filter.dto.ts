import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TASK_STATUS } from '../enums/task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TASK_STATUS.DONE, TASK_STATUS.IN_PROGRESS, TASK_STATUS.OPEN])
  status: TASK_STATUS;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
