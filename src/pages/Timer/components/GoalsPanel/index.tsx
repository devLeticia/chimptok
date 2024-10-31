import { useState } from 'react'
import { Cloud, Target, Medal, PlusCircle, Flag, Plus, Rabbit } from '@phosphor-icons/react'; // Import Phosphor icons
import { DomainProgressBar } from '../../../../domain-components/ProgressBar';
import { GoalPanelContainer, GoalToPickCard, GoalTitle, InfoContainer, ProgressContainer, ProgressInfoContainer, TasksContainer, EmptyGoalCard, GoalIndex } from './styles';
import { StyledCheckCircle } from './../../../Welcome/styles';
import { NewGoalForm } from '../../../Goals/NewGoalForm';
import Modal from '../../../../components/Modal';
import { NewTaskCycleForm } from '../NewTaskCycleForm';
import { Button } from '../../../../components/Button';
import { useCycles } from '../../../../contexts/CyclesContext';


interface GoalsPanelProps {
    activeGoals: any
}

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
    const [isNewCyclelModalOpen, setIsNewCyclelModalOpen] = useState(false)
    const { getHomeData } = useCycles();
    const openModal = () => {
        setIsNewGoalModalOpen(true)
    }
    const closeModal = () => {
        console.log('foi fechar o modal')
        setIsNewGoalModalOpen(false)
    }

    const openNewCycleModal = () => {
        setIsNewCyclelModalOpen(true)
    }
    const closeNewCycleModal = () => {
        console.log('fechar modal')
        setIsNewCyclelModalOpen(false)
    }

    function formattedDate(dateString: string) {
        const date = new Date(dateString); 
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }).format(date); 
    }
    function getProgressPercentage(expectedHours: number, accomplishedHours: number) {
        return accomplishedHours === 0 ? 0 : (accomplishedHours / expectedHours).toFixed(1) ;
    }

    const cardsSlots = 4 - activeGoals.length;

    return (
        <>
        <GoalPanelContainer>
            {activeGoals.slice(0, 4).map((goal, index) => (
                <GoalToPickCard key={index} onClick={openNewCycleModal}>
                    <GoalTitle>{goal.goalName}</GoalTitle>
                    <InfoContainer>
                        <div>{goal.hoursPerWeek}h/week</div>
                        <div>{formattedDate(goal.deadline)}</div>
                    </InfoContainer>
                    <TasksContainer>
                        {Array.from({ length: goal.totalTasksDoneToday }).map((_, taskIndex) => (
                            <StyledCheckCircle key={taskIndex} size={16} weight="fill" />
                        ))}
                    </TasksContainer>
                    <ProgressContainer>
                        <ProgressInfoContainer>
                            <div>Today</div>
                            <div>{getProgressPercentage(goal.dayProgress.dayExpectedHours, goal.dayProgress.dayAccomplisedHours)}%</div>
                        </ProgressInfoContainer>
                        <DomainProgressBar progress={Number(getProgressPercentage(goal.dayProgress.dayExpectedHours, goal.dayProgress.dayAccomplisedHours))} animated={false} children={''} />
                    </ProgressContainer>
                    <ProgressContainer>
                        <ProgressInfoContainer>
                            <div>Overall</div>
                            <div>{getProgressPercentage(goal.overallProgress.overallAccomplisedHours, goal.overallProgress.overallExpectedHours)}%</div>
                        </ProgressInfoContainer>
                        <DomainProgressBar progress={(goal.overallProgress.overallAccomplisedHours, goal.overallProgress.overallExpectedHours)} animated={false} children={''} />
                    </ProgressContainer>
                </GoalToPickCard>
            ))}
            {Array.from({ length: cardsSlots }).map((_, index) => {
                const { cta1, cta2, icon: IconComponent } = emptyCardCTAs[index % emptyCardCTAs.length];

                return (
                    <EmptyGoalCard key={index} onClick={openModal}>
                        {/* <IconComponent size={42}  weight="duotone" color="#b0bac4"/> */}
                        <GoalIndex>{index + 1}</GoalIndex>
                        <div>
                            <h3>{cta1}</h3>
                            <p>{cta2}</p>
                            <PlusCircle size={36}  weight="fill" color="#c3c9ce"/>
                        </div>
                    </EmptyGoalCard >
                );
            })}
        </GoalPanelContainer>
        <Modal isOpen={isNewGoalModalOpen} onClose={closeModal}>
            <NewGoalForm closeModal={closeModal} />
        </Modal>
        <Modal isOpen={isNewCyclelModalOpen} onClose={closeNewCycleModal} >
            {/* <NewCycleForm closeModal={closeNewCycleModal} /> */}
            <NewTaskCycleForm closeNewCycleModal={closeNewCycleModal} getHomeData={getHomeData}/>
        </Modal>
    </>
    )
}

