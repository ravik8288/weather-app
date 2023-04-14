import dayjs from 'dayjs'
import React from 'react'
import { useMemo } from 'react'
import config from '../../config'

function TempComp(props) {
const  {weather,temp_unit,time} = props
    const formatedTime = useMemo(()=>{
        return dayjs.unix(time).format('hh:mm a')
    },[time])
  return (
    <div className="bg-slate-100 rounded-md p-3">
    <div className="flex items-center">
      <img className="h-5 mr-2" src={config?.temp_icon} alt="timer" />
      <span>{`${weather} ${temp_unit}`}</span>
    </div>
    <div className="flex items-center">
      <img className="h-5 mr-2" src={config?.time_icon} alt="timer" />
      <span>{`${formatedTime}`}</span>
    </div>
  </div>
  )
}

export default TempComp