import React from 'react'

export default function Input({onChange, labelFor, id, name, label, type }) {
  return (
    <div className={'mb-3'}>
                    <label htmlFor={labelFor} className={'text-lg block'}>{label}</label>
                    <input type={type} id = {id} name={name} onChange={onChange} required className={'border border-blue-400 w-100 text-lg p-1 rounded-md'}/>
                </div>
  )
}
