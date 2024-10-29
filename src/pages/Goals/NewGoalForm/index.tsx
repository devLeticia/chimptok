import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import {
  Container,
  SuperHeader,
  ColWrapper,
  RowWrapper,
  TaskInputWrapper,
  Index,
  StyledTrashIconButton,
  TasksContainer,
  TaskDisclaimerWrapper,
  StyledDatePickerWrapper
} from './styles';
import {
  FlagBanner,
  Calendar,
  Clock,
  CheckSquareOffset,
  Plus,
} from '@phosphor-icons/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import goalsService from '../../../http/requests/goals/goals.service';
import { useCycles } from '../../../contexts/CyclesContext';

const TaskSchema = z.object({
  id: z.string(),
  taskName: z.string().min(5, { message: 'Min 5 chars' }).max(40, { message: 'Max 40 chars' }),
});

const NewGoalFormSchema = z.object({
  goalName: z.string().min(6, { message: 'Min 6 chars' }).max(54, { message: 'Max 54 chars' }),
  deadline: z.coerce.date({ message: 'Invalid date' }),
  hoursPerWeek: z.coerce.number().int().min(1).max(40),
  tasks: z.array(TaskSchema).nonempty({ message: 'At least 1 task' }),
});

interface NewGoalFormProps {
  closeModal: () => void;
  goalData?: {
    id: string;
    goalName: string;
    deadline: Date;
    hoursPerWeek: number;
    tasks: { id: string; taskName: string; isCompleted: boolean }[];
  };
}

type NewGoalFormData = z.infer<typeof NewGoalFormSchema>;

export function NewGoalForm({ closeModal, goalData }: NewGoalFormProps) {
  const { getHomeData } = useCycles();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<NewGoalFormData>({
    resolver: zodResolver(NewGoalFormSchema),
    mode: 'all',
    defaultValues: {
      goalName: goalData?.goalName ?? '',
      deadline: goalData?.deadline ?? new Date(),
      hoursPerWeek: goalData?.hoursPerWeek ?? 1,
      tasks: goalData?.tasks.map(task => ({ id: task.id, taskName: task.taskName })) ?? [{ id: uuidv4(), taskName: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tasks',
  });

  const saveGoal = (data: NewGoalFormData) => {
    const userId = localStorage.getItem('user_id');
    const tasksArray = data.tasks.map(task => ({
      id: task.id,
      taskName: task.taskName,
      isCompleted: false,
    }));

    if (userId) {
      const payload = {
        goalId: goalData?.id ?? null,
        userId,
        goalName: data.goalName,
        deadline: data.deadline,
        weeklyHours: data.hoursPerWeek,
        tasks: tasksArray,
      };

      const goalRequest = goalData
        ? goalsService.updateGoal(payload)
        : goalsService.registerGoal(payload);

      goalRequest
        .then(() => {
          closeModal();
          getHomeData();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const handleTaskKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      append({ id: uuidv4(), taskName: '' });
    }
  };

  // Watch deadline to pass as selected value to DatePicker
  const deadline = watch('deadline');

  return (
    <Container>
      <SuperHeader>{goalData ? 'EDIT YOUR GOAL' : 'SET YOUR NEW GOAL'}</SuperHeader>
      <form onSubmit={handleSubmit(saveGoal)}>
        <ColWrapper>
          <Input
            label="What do you wanna achieve?"
            type="text"
            placeholder="Goal to Achieve"
            icon={<FlagBanner weight="duotone" size={24} />}
            {...register('goalName')}
            errorMessage={errors.goalName?.message ?? null}
          />
          <RowWrapper>
          <StyledDatePickerWrapper>
            <DatePicker
              selected={deadline}
              onChange={(date: Date) => setValue('deadline', date)}
              dateFormat="dd/MMM/yyyy"
              customInput={
                <Input
                  label="Deadline"
                  type="text"
                  icon={<Calendar weight="duotone" size={24} />}
                  errorMessage={errors.deadline?.message ?? null}
                />
              }
            />
             </StyledDatePickerWrapper>
            <Input
              label="Weekly hours to dedicate"
              type="number"
              min={1}
              max={40}
              placeholder="Hours per week"
              icon={<Clock weight="duotone" size={24} />}
              {...register('hoursPerWeek')}
              errorMessage={errors.hoursPerWeek?.message ?? null}
            />
          </RowWrapper>
        </ColWrapper>
        <hr />
        <ColWrapper>
          <TaskDisclaimerWrapper>
            <p>Now add tasks to conquer the goal</p>
            <p>{fields.length}</p>
          </TaskDisclaimerWrapper>
          <TasksContainer>
            {fields.map((task, index) => (
              <TaskInputWrapper key={task.id}>
                <Index>{index + 1}</Index>
                <Input
                  type="text"
                  placeholder="Task"
                  {...register(`tasks.${index}.taskName`)}
                  onKeyDown={event => handleTaskKeyDown(event, index)}
                  icon={<CheckSquareOffset weight="duotone" size={24} />}
                  errorMessage={errors.tasks?.[index]?.taskName?.message ?? ''}
                />
                {fields.length > 1 && (
                  <StyledTrashIconButton onClick={() => remove(index)} />
                )}
              </TaskInputWrapper>
            ))}
          </TasksContainer>
          <Button color="dark" onClick={() => append({ id: uuidv4(), taskName: '' })}>
            <Plus size={16} weight="bold" />
            Add another Task
          </Button>
          <Button fullWidth type="submit" disabled={!isValid}>
            {goalData ? 'Update Goal' : 'Save Goal'}
          </Button>
        </ColWrapper>
      </form>
    </Container>
  );
}