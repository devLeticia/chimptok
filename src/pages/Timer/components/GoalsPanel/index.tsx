import { useState } from 'react'
import { Cloud, Target, Medal, PlusCircle, Flag, Rabbit } from '@phosphor-icons/react'; // Import Phosphor icons
import { DomainProgressBar } from '../../../../domain-components/ProgressBar';
import { GoalPanelContainer, GoalToPickCard, GoalTitle, InfoContainer, ProgressContainer, ProgressInfoContainer, TasksContainer, EmptyGoalCard, GoalIndex, RightColumnContainer } from './styles';
import { StyledCheckCircle } from './../../../Welcome/styles';
import { NewGoalForm } from '../../../Goals/NewGoalForm';
import Modal from '../../../../components/Modal';
import { NewTaskCycleForm } from '../NewTaskCycleForm';
import { useCycles } from '../../../../contexts/CyclesContext';


interface GoalsPanelProps {
    activeGoals: any
}
type Task = {
    createdAt: string;
    goalId: string;
    id: string;
    isCompleted: boolean;
    taskName: string;
    updatedAt: string;
  };

type Goal = {
    id: string;
    createdAt: Date;
    deadline: Date;
    hoursPerWeek: number;
    status: number;
    totalHoursSpent: number;
    progressPercentage: number;
    goalName: string;
    tasks: Task[];
    isCompleted: boolean
  };
  
const emptyCardCTAs = [
    {
        cta1: "Space reserved for your next big win.",
        cta2: "Add a goal!",
        icon: Medal
    },
    {
        cta1: "There’s a goal-sized hole here!",
        cta2: "Fill it up!",
        icon: Target
    },    
    {
        cta1: "Got room for more dreams?",
        cta2: "Add a new goal here!",
        icon: Cloud // Pass the actual component reference
    },

    {
        cta1: "More goals? Yes, please!",
        cta2: "Add your next big one here!",
        icon: PlusCircle
    },
    {
        cta1: "Got a new goal?",
        cta2: "Here’s room for it right here!",
        icon: Flag
    },
    {
        cta1: "Hop to your next goal!",
        cta2: "Add a new one here!",
        icon: Rabbit
    }
];

export function GoalsPanel({ activeGoals }: GoalsPanelProps) {
    const [isNewGoalModalOpen, setIsNewGoalModalOpen] = useState(false)
    const [isNewCycleModalOpen, setIsNewCycleModalOpen] = useState(false)
    const [selectedGoalForCycle, setSelectedGoalForCycle] = useState<Goal | undefined>(undefined);
    const { getHomeData } = useCycles();
    
    const openModal = () => {
        setIsNewGoalModalOpen(true)
    }
    const closeModal = () => {
        setIsNewGoalModalOpen(false)
    }

    const openNewCycleModal = (goal: Goal) => {
        console.log('clicou pra abrir')
        setSelectedGoalForCycle(goal);
        setIsNewCycleModalOpen(true);
      };

      const closeNewCycleModal = () => {
        setIsNewCycleModalOpen(false);
        setSelectedGoalForCycle(undefined);
      };

    function formattedDate(dateString: string) {
        const date = new Date(dateString); 
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }).format(date); 
    }

    function calculateDailyProgress(dayProgress: { dayExpectedHours: number; dayAccomplishedHours: number }) {
        const { dayExpectedHours, dayAccomplishedHours } = dayProgress;
        return Math.min(Math.round((dayAccomplishedHours / dayExpectedHours) * 100), 100);
    }
    
    function calculateOverallProgress(overallProgress: { overallExpectedHours: number; overallAccomplishedHours: number }) {
        const { overallExpectedHours, overallAccomplishedHours } = overallProgress;
    
        if (isNaN(overallExpectedHours) || isNaN(overallAccomplishedHours) || overallExpectedHours === 0) {
            return 0;
        }
    
        return Math.min(Math.round((overallAccomplishedHours / overallExpectedHours) * 100), 100);
    }
    

    function formattedTime (num: number) {
        if (num === 0) return '0h';
        
        let hours = Math.floor(num);
        let minutes = Math.round((num - hours) * 60);
      
        if (hours === 0) {
          return `${minutes}min`;
        }
      
        return `${hours}h${minutes}min`;
      }
      

    const cardsSlots = 4 - activeGoals.length;

    return (
        <>
        <GoalPanelContainer>
            {activeGoals.slice(0, 4).map((goal, index) => (
                <GoalToPickCard key={index} onClick={() => openNewCycleModal(goal)}>
                    <GoalTitle>{goal.goalName}</GoalTitle>
                    <InfoContainer>
                        <div>{goal.hoursPerWeek}h a week</div>
                        <RightColumnContainer>
                            <div>{formattedDate(goal.deadline)}</div>
                            <div>{formattedTime(goal.dayProgress.dayAccomplishedHours)} / {formattedTime(goal.dayProgress.dayExpectedHours)}</div>
                        </RightColumnContainer>
                    </InfoContainer>
                    <TasksContainer>
                        {Array.from({ length: goal.totalTasksDoneToday }).map((_, taskIndex) => (
                            <StyledCheckCircle key={taskIndex} size={16} weight="fill" />
                        ))}
                    </TasksContainer>
                    <ProgressContainer>
                        <ProgressInfoContainer>
                            <div>Today</div>
                            <div>{calculateDailyProgress(goal.dayProgress)}%</div>
                        </ProgressInfoContainer>
                        <DomainProgressBar progress={calculateDailyProgress(goal.dayProgress)} animated={false} children={''} />
                    </ProgressContainer>
                    <ProgressContainer>
                        <ProgressInfoContainer>
                            <div>Overall</div>
                            <div>{calculateOverallProgress(goal.overallProgress)}%</div>
                        </ProgressInfoContainer>
                        <DomainProgressBar progress={calculateOverallProgress(goal.overallProgress)} animated={false} children={''} />
                    </ProgressContainer>
                </GoalToPickCard>
            ))}
            {Array.from({ length: cardsSlots }).map((_, index) => {
                const { cta1, cta2, icon: IconComponent } = emptyCardCTAs[index % emptyCardCTAs.length];

                return (
                    <EmptyGoalCard key={index} onClick={openModal}>
                        <GoalIndex>{index + 1}</GoalIndex>
                        <div>
                            <h3>{cta1}</h3>
                            <p>{cta2}</p>
                            <PlusCircle size={36} weight="fill" color="#c3c9ce"/>
                        </div>
                    </EmptyGoalCard >
                );
            })}
        </GoalPanelContainer>
        <Modal isOpen={isNewGoalModalOpen} onClose={closeModal}>
            <NewGoalForm closeModal={closeModal} />
        </Modal>
        <Modal isOpen={isNewCycleModalOpen} onClose={closeNewCycleModal}>
            <NewTaskCycleForm closeNewCycleModal={closeNewCycleModal} getHomeData={getHomeData} selectedGoal={selectedGoalForCycle} />
        </Modal>
    </>
    )
}
