import React, { useEffect, useState } from 'react'
import PatientsTableRow from './PatientsTableRow';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

function PatientsTable(props) {
    const [date, setDate] = useState()
    const records = props.records
    const [filteredRecords, setFilteredRecords] = useState([])

    useEffect(() => {}, [records])
    useEffect(() => {}, [filteredRecords])

    useEffect(() => {
        if (date !== null) {
            if (date === undefined) {
                setFilteredRecords(records)
            } else{
                const year = moment(date, 'Y').format('YYYY')
                const month = moment(date, 'M').format('MM')
                const day = moment(date, 'D').format('DD')
                const dateFilter = `${year}-${month}-${day}`
                const filter = records.filter((record) => record?.date === dateFilter)
                setFilteredRecords(filter)
            }
        } else{
            setFilteredRecords(records)
        }
    }, [date, records])

    function dateHandler(date){
        setDate(date)
    }

    return (
        <div className='md:flex md:justify-center'>
            <div className=" md:w-8/12 lg:w-6/12">
                <div className="">
                    <div className='flex justify-end items-center space-x-2'>
                        <div>
                            <p className='font-bold text-gray-500'>Filter By Date:</p>
                        </div>
                        <div>
                            <DatePicker
                                selected={date}
                                onChange={(dateTime) => dateHandler(dateTime)}
                                className='input input-bordered w-36'
                                dateFormat="d/MM/yyyy"
                                required />
                        </div>
                    </div>
                    <div className='overflow-x-auto mt-4'>
                        <table className="table table-zebra w-full rounded-box">
                            <thead className=''>
                                <tr>
                                    <th></th>
                                    <th>Full Names</th>
                                    <th>Age</th>
                                    <th>BMI Status</th>
                                </tr>
                            </thead>
                            <tbody className='border'>
                                {filteredRecords.map((record, idx) => (
                                    <PatientsTableRow
                                        key={idx}
                                        idx={idx}
                                        record={record}/>
                                ))}
                            </tbody>
                        </table>
                        {filteredRecords.length === 0 && (
                            <div className='mt-7 p-3'>
                                <p className="text-lg text-center">There are no records yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientsTable