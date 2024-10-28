import React, { useEffect, useState, useCallback } from 'react'
import { differenceInSeconds } from 'date-fns'
import {
  ActiveCycleDescription,
  CountdownContainer,
  Separator,
  CycleCountdownContainer,
  TaskInProgressDisclaimer,
  ProgressBarContainer,
  CheckPoint
} from './styles'
import { useCycles } from './../../../../contexts/CyclesContext'
import { Button } from './../../../../components/Button/index'
import { Card } from '../../../../components/Card'
import { DomainProgressBar } from '../../../../domain-components/ProgressBar'
import { PaperPlaneRight, FlagBannerFold, Cherries, Orange, PlayCircle} from '@phosphor-icons/react'

const motivationalPhrases = [
  {
    title: "Working hard on",
    subtitle: "to achieve",
    message: "Keep pushing forward for",
  },
  {
    title: "Diving into",
    subtitle: "to reach",
    message: "You've got this for the next",
  },
  {
    title: "Focused on",
    subtitle: "to conquer",
    message: "Stay strong for",
  },
  {
    title: "Putting in the effort on",
    subtitle: "to realize",
    message: "Keep up the great work for",
  },
  {
    title: "Committed to",
    subtitle: "to achieve",
    message: "Your dedication will pay off in the next",
  },
  {
    title: "Working on",
    subtitle: "to unlock",
    message: "Your progress shines for",
  },
  {
    title: "Striving through",
    subtitle: "to accomplish",
    message: "You're making strides for",
  },
  {
    title: "Investing time in",
    subtitle: "to achieve",
    message: "Stay motivated for",
  },
  {
    title: "Tackling",
    subtitle: "to reach",
    message: "Keep the momentum going for",
  },
  {
    title: "Engaged in",
    subtitle: "to fulfill",
    message: "Your effort counts for the next",
  }]
  const phrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
  export function Countdown() {
    const { activeCycle, markCurrentCycleAsFinished, interruptCycle } =
      useCycles()
  
    const calculateRemainingTime = useCallback(() => {
      if (activeCycle) {
        const totalSeconds = activeCycle.minutesAmount * 60
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.createdAt),
        )
        return Math.max(0, totalSeconds - secondsDifference)
      }
      return 0
    }, [activeCycle])
  
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime())
    const [progress, setProgress] = useState(0) // Store progress percentage
  
    useEffect(() => {
      setRemainingTime(calculateRemainingTime())
  
      let interval: NodeJS.Timeout
  
      function updateRemainingTime() {
        setRemainingTime(calculateRemainingTime())
      }
  
      if (activeCycle && remainingTime > 0) {
        interval = setInterval(updateRemainingTime, 1000)
      }
  
      return () => {
        clearInterval(interval)
      }
    }, [activeCycle, remainingTime, calculateRemainingTime])
  
    useEffect(() => {
      setRemainingTime(calculateRemainingTime());
    
      let interval: NodeJS.Timeout;
    
      function updateRemainingTime() {
        setRemainingTime(calculateRemainingTime());
      }
    
      if (activeCycle && remainingTime > 0) {
        interval = setInterval(updateRemainingTime, 1000); // Timer updates every second
      }
    
      return () => {
        clearInterval(interval);
      };
    }, [activeCycle, remainingTime, calculateRemainingTime]);
    
    useEffect(() => {
      if (activeCycle) {
        const totalSeconds = activeCycle.minutesAmount * 60;
        const elapsedSeconds = totalSeconds - remainingTime;
        const currentProgress = (elapsedSeconds / totalSeconds) * 100;
    
        // Only update the progress without resetting it to 0
        setProgress(currentProgress); // Smoothly fill the progress bar based on elapsed time
      }
    }, [remainingTime, activeCycle]);
    
    const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
    const seconds = String(remainingTime % 60).padStart(2, '0');
  
    useEffect(() => {
      if (remainingTime === 0 && activeCycle) {
        markCurrentCycleAsFinished()
      }
    }, [remainingTime, activeCycle, markCurrentCycleAsFinished])
  
    function handleInterruptCycle() {
      const payload = {
        cycleId: activeCycle?.id,
        userId: localStorage.getItem('user_id')
      }
      console.log('payload', payload)
      interruptCycle(payload)
    }
  
   
  
    return (
      <Card>
        <CycleCountdownContainer>
          <ActiveCycleDescription>
            <PlayCircle  size={24} weight="duotone" color=''/>
            <p>Work in Progress</p>
            <TaskInProgressDisclaimer>
              <h1>{activeCycle?.task.taskName}</h1> in  <h1> {activeCycle?.task.goal.goalName}</h1>
            </TaskInProgressDisclaimer>
              <p>{`${phrase.message} ${activeCycle?.minutesAmount} minutes!`} </p>
          </ActiveCycleDescription>
          <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
          </CountdownContainer>
          <ProgressBarContainer>
            <PaperPlaneRight weight="duotone" size={24} color='babyblue' />
            <DomainProgressBar progress={progress} animated={false}> 
                {/* <CheckPoint>
                  <Cherries weight="fill" size={22} color='gray' />
                  <div></div>
                </CheckPoint> */}
              </DomainProgressBar>
            <FlagBannerFold  weight="duotone" size={24} color='gray'/>
          </ProgressBarContainer>
            <Button fullWidth color="dark" onClick={handleInterruptCycle}>
            Interrupt
          </Button>
        </CycleCountdownContainer>
      </Card>
    )
  }