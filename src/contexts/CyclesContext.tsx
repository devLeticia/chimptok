// CyclesContext.jsx

import React, { createContext, useState, useContext, ReactNode } from 'react'

type NewCycle = {
  goalName: string
  taskName: string
  startDate: Date
  goalId: string
  taskId: string
  minutesAmount: number
}

type CycleContextProps = {
  activeCycle: NewCycle | undefined
  startNewCycle: (newCycleData: NewCycle) => void
  markCurrentCycleAsFinished: () => void
}

const CyclesContext = createContext<CycleContextProps | undefined>(undefined)

export function useCycles() {
  const context = useContext(CyclesContext)
  if (!context) {
    throw new Error('useCycles must be used within a CyclesProvider')
  }
  return context
}

type CyclesProviderProps = {
  children: ReactNode
}

export const CyclesProvider: React.FC<CyclesProviderProps> = ({ children }) => {
  const [activeCycle, setActiveCycle] = useState<NewCycle | undefined>()

  function startNewCycle(newCycleData: NewCycle) {
    console.log('startNewCycle:', newCycleData)
    setActiveCycle(newCycleData)
  }

  function markCurrentCycleAsFinished() {
    // setActiveCycle(undefined)
    console.log('marcar como terminado:', markCurrentCycleAsFinished)
  }

  const contextValue: CycleContextProps = {
    activeCycle,
    startNewCycle,
    markCurrentCycleAsFinished,
  }

  return (
    <CyclesContext.Provider value={contextValue}>
      {children}
    </CyclesContext.Provider>
  )
}
