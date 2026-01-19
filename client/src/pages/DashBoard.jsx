import React from 'react'
import WrapCard from '../components/WrapCard'
import ItemCard from '../components/ItemCard'

export default function DashBoard() {
  return (
    <WrapCard>
      <div className='w-4/5 h-auto p-5 grid grid-cols-[repeat(auto-fit,minmax(200px,250px))] gap-10'>
        <ItemCard className = {'select-none text-9xl'}>
          +
        </ItemCard>
        <ItemCard className={'text-2xl'}>Learn Python</ItemCard>
        
        
      </div>
    </WrapCard>
  )
}
