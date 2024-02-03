import React, { useEffect, useState, useCallback } from 'react'
import { differenceInSeconds } from 'date-fns'
import { ActiveCycleDescription, CountdownContainer, Separator } from './styles'
import { useCycles } from './../../../../contexts/CyclesContext'
import { Button } from './../../../../components/Button/index'

export function Countdown() {
  const { activeCycle, markCurrentCycleAsFinished, abandonCurrentCycle } =
    useCycles()

  const calculateRemainingTime = useCallback(() => {
    if (activeCycle) {
      const totalSeconds = activeCycle.minutesAmount * 60
      const secondsDifference = differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate),
      )
      return Math.max(0, totalSeconds - secondsDifference)
    }
    return 0
  }, [activeCycle])

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime())

  useEffect(() => {
    console.log('activeCycle:', activeCycle)

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

  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0')
  const seconds = String(remainingTime % 60).padStart(2, '0')

  useEffect(() => {
    if (remainingTime === 0 && activeCycle) {
      markCurrentCycleAsFinished()
    }
  }, [remainingTime, activeCycle, markCurrentCycleAsFinished])

  function handleAbandonCurrentCycle() {
    abandonCurrentCycle()
  }
  return (
    <>
      <ActiveCycleDescription>
        Working for <span>{activeCycle?.minutesAmount} minutes</span> on{' '}
        <span>{activeCycle?.taskName}</span> towards{' '}
        <span>{activeCycle?.goalName}</span>
      </ActiveCycleDescription>
      <CountdownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountdownContainer>
      <Button color="dark" onClick={handleAbandonCurrentCycle}>
        Interrupt
      </Button>
    </>
  )
}
