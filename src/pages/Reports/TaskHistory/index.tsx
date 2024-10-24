import {
  TaskHistoryContainer,
  IconContainer,
  TaskDataContainer,
  TaskContainer,
  StyledCheckCircle,
  StyledPlayCircle,
  StyledXCircle,
  GoalDescription,
  TaskListContainer,
  SessionTitle,
  BlurOverlay
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { useEffect, useState } from 'react'
import cyclesService from '../../../http/requests/cycles/cycles.service'

type Goal = {
  createdAt: Date;
  deadline: Date;
  goalName: string;
  id: string;
  isFinished: boolean;
  updatedAt: Date;
  userId: string;
  weeklyHours: number;
};

type Task = {
  id: string;
  taskName: string;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  userId: string;
  goalId: string;
  goal: Goal;
};

type Cycle = {
  id: string;
  createdAt: Date;
  minutesAmount: number;
  finishAt: Date;
  interruptedAt: Date | null;
  taskId: string;
  userId: string;
  task: Task;
};

interface CyclesHistoryResponse {
  data: Cycle[];
}

// Function to generate fake task history data
function generateFakeTaskHistoryData(count: number): Cycle[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `task-${index + 1}`,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)), // Random past date
    minutesAmount: Math.floor(Math.random() * 120), // Random minutes (0-120)
    finishAt: new Date(Date.now() + Math.floor(Math.random() * 1000000000)), // Random future date
    interruptedAt: Math.random() > 0.5 ? null : new Date(), // Randomly set interrupted or not
    taskId: `task-${index + 1}`,
    userId: 'user-id', // Replace with actual user id if needed
    task: {
      id: `task-${index + 1}`,
      taskName: `Fake Task ${index + 1}`,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)), // Random past date
      updatedAt: new Date(),
      isCompleted: Math.random() > 0.5, // Random completion status
      userId: 'user-id', // Replace with actual user id if needed
      goalId: `goal-${index + 1}`,
      goal: {
        createdAt: new Date(),
        deadline: new Date(Date.now() + Math.floor(Math.random() * 10000000000)), // Random future date
        goalName: `Fake Goal ${index + 1}`,
        id: `goal-${index + 1}`,
        isFinished: Math.random() > 0.5, // Random finished status
        updatedAt: new Date(),
        userId: 'user-id', // Replace with actual user id if needed
        weeklyHours: Math.floor(Math.random() * 10) + 1,
      }
    }
  }));
}

export function TaskHistory() {
  const [userTaskHistory, setUserTaskHistory] = useState<Cycle[]>([]);

  function getDistanceToNow(deadlineDate: Date) {
    const formattedResult = formatDistanceToNow(deadlineDate, {
      addSuffix: true,
    });
    return formattedResult;
  }

  function getTaskHistory() {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      cyclesService
        .getCyclesHistory(userId)
        .then((resp) => {
          const responseData = resp as CyclesHistoryResponse;
          if (responseData.data.length > 0) {
            setUserTaskHistory(responseData.data);
          } else {
            setUserTaskHistory(generateFakeTaskHistoryData(5)); // Change 5 to desired fake data count
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  useEffect(() => {
    getTaskHistory();
  }, []);

  function getTaskStatus(cycle: Cycle) {
    const now = new Date();
    const taskStart = new Date(cycle.createdAt);
    const taskEnd = new Date(taskStart.getTime() + cycle.minutesAmount * 60000); // Calculate end time

    if (cycle.interruptedAt) {
      return { icon: <StyledXCircle size={18} weight="fill" />, color: 'red' };
    } else if (now >= taskEnd) {
      return { icon: <StyledCheckCircle size={18} weight="fill" />, color: 'green' };
    } else {
      return { icon: <StyledPlayCircle size={18} weight="fill" />, color: 'orange' };
    }
  }

  return (
    <TaskHistoryContainer>
      <BlurOverlay />
      <SessionTitle>Task History</SessionTitle>
      <TaskListContainer>
        {userTaskHistory.map((cycle, index) => {
          const { icon, color } = getTaskStatus(cycle);

          return (
            <TaskContainer key={index}>
              <IconContainer style={{ color }}>
                {icon}
              </IconContainer>
              <TaskDataContainer>
                <span>{getDistanceToNow(new Date(cycle.createdAt))}</span>
                <h1>{cycle.task.taskName}</h1>
                <GoalDescription>
                  in <span>{cycle.task.goal.goalName}</span>
                </GoalDescription>
              </TaskDataContainer>
            </TaskContainer>
          )
        })}
      </TaskListContainer>
    </TaskHistoryContainer>
  );
}
