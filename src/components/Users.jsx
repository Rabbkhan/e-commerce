import React from 'react'
import { useParams} from 'react-router-dom'
const Users = () => {
  const {userid} = useParams()
  return (
    <div className='my-32 bg-slate-950 text-slate-50'>Users:{userid}</div>
  )
}

export default Users