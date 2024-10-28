import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import {
  Container,
  SuperHeader,
  ColWrapper,
  RowWrapper,
  SuccessMessageContainer,
  TaskInputWrapper,
  Index,
  StyledTrashIconButton,
  TasksContainer,
  TaskDisclaimerWrapper,
  StyledCheckCircle,
} from './styles';
import {
  FlagBanner,
  Calendar,
  Clock,
  CheckSquareOffset,
  Plus,
} from '@phosphor-icons/react';
import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import goalsService from '../../../http/requests/goals/goals.service';
import { useCycles } from '../../../contexts/CyclesContext';

const TaskSchema = z.object({
  id: z.string(),
  taskName: z.string().min(5, { message: "Min 5 chars" }).max(40, { message: "Max 40 chars" }),
});

const NewGoalFormSchema = z.object({
  goalName: z.string().min(6, { message: "Min 6 chars" }).max(54, { message: "Max 54 chars" }),
  deadline: z.coerce.date({ message: "Invalid date" }),
  hoursPerWeek: z.coerce.number().int({ message: "Must be a number" }).min(1, { message: "Min 1 hour" }).max(40, { message: "Max 40 hours" }),
  tasks: z.array(TaskSchema).nonempty({ message: "At least 1 task" }),
});

interface NewGoalFormProps {
  closeModal: () => void;
  goal?: {
    id: string;
    goalName: string;
    deadline: string;
    hoursPerWeek: number;
    tasks: { id: string; taskName: string }[];
  };
}

type NewGoalFormData = z.infer<typeof NewGoalFormSchema>;

export function NewGoalForm({ closeModal, goal }: NewGoalFormProps) {
  const { getHomeData } = useCycles();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<NewGoalFormData>({
    resolver: zodResolver(NewGoalFormSchema),
    mode: 'all',
    defaultValues: goal ? { ...goal, tasks: goal.tasks } : { tasks: [{ id: uuidv4(), taskName: '' }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tasks',
  });

  useEffect(() => {
    if (goal) {
      reset(goal);
    }
  }, [goal, reset]);

  function handleSaveGoal(data: NewGoalFormData) {
    const userId = localStorage.getItem('user_id');
    const tasksArray = data.tasks.map((task) => ({
      id: task.id,
      taskName: task.taskName,
      isCompleted: false,
    }));

    const payload = {
      goalId: goal ? goal.id : null,
      userId,
      goalName: data.goalName,
      deadline: data.deadline,
      weeklyHours: data.hoursPerWeek,
      tasks: tasksArray,
    };

    const request = goal
      ? goalsService.updateGoal(payload)
      : goalsService.registerGoal(payload);

    request
      .then((resp) => {
        closeModal();
        getHomeData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleTaskKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      append({ id: uuidv4(), taskName: '' });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Container>
      <SuperHeader>{goal ? 'EDIT YOUR GOAL' : 'SET YOUR NEW GOAL'}</SuperHeader>
      <form onSubmit={handleSubmit(handleSaveGoal)}>
        <ColWrapper>
          <Input
            label="What do you wanna achieve?"
            type="text"
            placeholder="Goal to Achieve"
            icon={<FlagBanner weight="duotone" size={24} />}
            {...register('goalName')}
            errorMessage={errors.goalName?.message?.toString() ?? null}
          />
          <RowWrapper>
            <Input
              label="Set a deadline"
              type="date"
              placeholder="Deadline"
              icon={<Calendar weight="duotone" size={24} />}
              {...register('deadline', { min: today })}
              min={today}
              errorMessage={errors.deadline?.message?.toString() ?? null}
            />
            <Input
              label="Weekly hours to dedicate"
              type="number"
              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
              min={1}
              max={40}
              placeholder="Hours per week"
              icon={<Clock weight="duotone" size={24} />}
              {...register('hoursPerWeek')}
              errorMessage={errors.hoursPerWeek?.message?.toString() ?? null}
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
                  onKeyDown={(event) => handleTaskKeyDown(event, index)}
                  icon={<CheckSquareOffset weight="duotone" size={24} />}
                  errorMessage={errors.tasks?.[index]?.taskName?.message?.toString() ?? null}
                />
                {fields.length > 1 && (
                  <StyledTrashIconButton
                    weight="regular"
                    size={18}
                    onClick={() => remove(index)}
                  />
                )}
              </TaskInputWrapper>
            ))}
          </TasksContainer>
          <Button color="dark" type="button" onClick={() => append({ id: uuidv4(), taskName: '' })}>
            <Plus size={16} weight="bold" color="white" />
            Add another Task
          </Button>
          <Button fullWidth type="submit" disabled={!isValid}>
            {goal ? 'Update Goal' : 'Save Goal'}
          </Button>
        </ColWrapper>
      </form>
    </Container>
  );
}