import React, { useState } from 'react'
import WrapCard from '../components/WrapCard'
import ItemCard from '../components/ItemCard'
import Modal from '../components/Modal'
import NewProjectForm from '../components/NewProjectForm'

export default function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  function handleModelOpen(){
    setModelOpen(true)
    setFormOpen(true)
  }
  function handleModelClose(){
    setModelOpen(false)
    setFormOpen(false)
  }

  return (
    <WrapCard>
      <div className='w-4/5 h-auto p-5 grid grid-cols-[repeat(auto-fit,minmax(200px,250px))] gap-10'>
        <ItemCard className = {'select-none text-9xl cursor-pointer'} onClick={handleModelOpen}>
          +
        </ItemCard>
        <ItemCard className={'text-2xl'}>Learn Python</ItemCard>
        {
          modelOpen && <Modal handleModelClose={handleModelClose}>
            { formOpen && <NewProjectForm/>

            }
          </Modal>
        }
        
      </div>
    </WrapCard>
  )
}
