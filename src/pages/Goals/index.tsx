import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { GoalsContainer } from './styles'
import { Card } from '../../components/Card'
import { Plus } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { Modal } from './../../components/Modal/index'
import { NewGoalForm } from './NewGoalForm/index'

export function Goals() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card>
        <GoalsContainer>
          <nav>
            <div>
              <NavLink to="/goals/active" title="Active Goals">
                Active Goals
              </NavLink>
              <NavLink to="/goals/past" title="Past Goals">
                Past Goals
              </NavLink>
            </div>
            <Button onClick={openModal}>
              <Plus weight="bold" size={18} />
              New Goal
            </Button>
          </nav>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <NewGoalForm closeModal={closeModal} />
          </Modal>
          <Outlet />
        </GoalsContainer>
      </Card>
    </>
  )
}
