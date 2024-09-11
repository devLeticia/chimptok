import { useState } from 'react'
import { Cloud, Target, Medal, PlusCircle, Flag } from '@phosphor-icons/react'; // Import Phosphor icons
import { DomainProgressBar } from '../../../../domain-components/ProgressBar';
import { GoalPanelContainer, GoalToPickCard, GoalTitle, InfoContainer, ProgressContainer, ProgressInfoContainer, TasksContainer, EmptyGoalCard } from './styles';
import { StyledCheckCircle } from './../../../Welcome/styles';
import { NewGoalForm } from '../../../Goals/NewGoalForm';
import Modal from '../../../../components/Modal';
import { NewTaskCycleForm } from '../NewTaskCycleForm';

const emptyCardCTAs = [
    {
        cta1: "Got room for more dreams?",
        cta2: "Add a new goal here!",
        icon: Cloud // Pass the actual component reference
    },
    {
        cta1: "There’s a goal-sized hole here!",
        cta2: "Fill it up!",
        icon: Target
    },
    {
        cta1: "Space reserved for your next big win.",
        cta2: "Add a goal!",
        icon: Medal
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
    // {
    //     cta1: "Hop to your next goal!",
    //     cta2: "Add a new one here!",
    //     icon: Rabbit
    // }
];

export function GoalsPanel({ userActiveGoals }: { userActiveGoals: any[] }) {
    const [isNewGoalModalOpen, setIsNewGoalModalOpen] = useState(false)
    const [isNewCyclelModalOpen, setIsNewCyclelModalOpen] = useState(false)

    const openModal = () => {
        setIsNewGoalModalOpen(true)
    }
    const closeModal = () => {
        setIsNewGoalModalOpen(false)
    }

    const openNewCycleModal = () => {
        setIsNewCyclelModalOpen(true)
    }
    const closeNewCycleModal = () => {
        setIsNewCyclelModalOpen(false)
    }

    const userGoals = [
        {
            name: 'Become fluent in Japanese',
            hoursAWeek: 7,
            totalHours: 600,
            todaysGoal: 5,
            deadline: '2025-12-31T23:59:59.000Z',
            todaysAchievementInHours: 1.5,
            overallHoursAchieved: 150,
            totalTasksDoneToday: 2,
        },
        {
            name: 'Read the Bible',
            hoursAWeek: 4,
            totalHours: 200,
            todaysGoal: 5,
            deadline: '2024-06-01T23:59:59.000Z',
            todaysAchievementInHours: 1,
            overallHoursAchieved: 120,
            totalTasksDoneToday: 1,
        },
        {
            name: 'Complete Marathon Training',
            hoursAWeek: 5,
            totalHours: 300,
            todaysGoal: 5,
            deadline: '2024-10-15T23:59:59.000Z',
            todaysAchievementInHours: 2,
            overallHoursAchieved: 180,
            totalTasksDoneToday: 3,
        },
    ];

    function formattedDate(dateString: string) {
        const date = new Date(dateString); 
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }).format(date); 
    }

    const cardsSlots = 4 - userActiveGoals.length;

    return (
        <>
        <GoalPanelContainer>
            {userActiveGoals.slice(0, 4).map((goal, index) => (
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
                            <div>{(goal.dayProgress.inPercentage).toFixed(0)}%</div>
                        </ProgressInfoContainer>
                        <DomainProgressBar progress={goal.dayProgress.inPercentage} />
                    </ProgressContainer>
                    <ProgressContainer>
                        <ProgressInfoContainer>
                            <div>Overall</div>
                            <div>{(goal.overallProgress.inPercentage).toFixed(0)}%</div>
                        </ProgressInfoContainer>
                        <DomainProgressBar progress={goal.overallProgress.inPercentage} />
                    </ProgressContainer>
                </GoalToPickCard>
            ))}
            {Array.from({ length: cardsSlots }).map((_, index) => {
                const { cta1, cta2, icon: IconComponent } = emptyCardCTAs[index % emptyCardCTAs.length];

                return (
                    <EmptyGoalCard key={index} onClick={openModal}>
                        {/* <IconComponent size={42}  weight="duotone" color="#b0bac4"/> */}
                        <h3>{cta1}</h3>
                        <p>{cta2}</p>
                        <PlusCircle size={36}  weight="fill" color="#c3c9ce"/>
                    </EmptyGoalCard >
                );
            })}
        </GoalPanelContainer>
        <Modal isOpen={isNewGoalModalOpen} onClose={closeModal}>
            <NewGoalForm closeModal={closeModal} />
        </Modal>
        <Modal isOpen={isNewCyclelModalOpen} onClose={closeNewCycleModal}>
            {/* <NewCycleForm closeModal={closeNewCycleModal} /> */}
            <NewTaskCycleForm />
        </Modal>
    </>
    )
}

