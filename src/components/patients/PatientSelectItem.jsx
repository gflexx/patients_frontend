/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import moment from 'moment'

function PatientSelectItem(props) {
    const patient = props.patient
    useEffect(() => {}, [patient])
    function selectPatient(patient){
        props.patientSelector(patient)
    }
    return (
        <div className='flex mb-2'>
            <div className='w-1/3 text-sm font-bold'>{patient?.first_name} {patient?.last_name}</div>
            <div className='w-1/4 text-sm'>{patient?.gender}</div>
            <div className='w-1/4 font-bold text-sm'>{moment(patient?.dob).fromNow()}</div>
            <div ><a onClick={() => selectPatient(patient)} className='btn btn-outline btn-sm'>Select</a></div>
        </div>
    )
}

export default PatientSelectItem