import React, { useEffect } from 'react'
import moment from 'moment'

function PatientsTableRow(props) {
    const record = props.record
    useEffect(() => {}, [record])
    return (
        <tr>
            <td>{props.idx + 1}.</td>
            <td className='font-bold'>{record?.patient?.first_name} {record?.patient?.last_name}</td>
            <td>{moment(record?.patient?.dob).fromNow().replace('ago','')}</td>
            <td className='font-bold text-gray-600'>
                {record?.bmi < 18.5 && "Underweight"}
                {(record?.bmi > 18.5 && record.bmi < 25)  && "Normal"}
                {record?.bmi >= 25 && "Overweight"}
            </td>
        </tr>
    )
}

export default PatientsTableRow