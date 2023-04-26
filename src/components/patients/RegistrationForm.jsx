import React, { useState, useEffect, useRef } from 'react'
import {MdPersonAddAlt} from 'react-icons/md'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormError from '../feedback/FormError';
import Loading from '../feedback/Loading';
import moment from 'moment'

function RegistrationForm(props) {
    const [date, setDate] = useState()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const genderRef = useRef()
    const error = props.error
    const loading = props.loading
    
    useEffect(() => {}, [date])
    useEffect(() => {}, [error])
    useEffect(() => {}, [loading])

    function dateHandler(date){
        setDate(date)
    }

    function submitHandler(e){
        e.preventDefault()
        props.setError()
        const year = moment(date, 'Y').format('YYYY')
        const month = moment(date, 'M').format('MM')
        const day = moment(date, 'D').format('DD')
        const formData = new FormData()
        formData.append("first_name", firstNameRef.current.value)
        formData.append("last_name", lastNameRef.current.value)
        formData.append("gender", genderRef.current.value)
        formData.append("dob", `${year}-${month}-${day}`)
        props.submitHandler(formData)
    }
    return (
        <div className='flex justify-center mt-12'>
            <div className='w-3/4 md:w-2/4 lg:w-1/3'>
                <form onSubmit={submitHandler} className='bg-base-200 rounded-box p-4 md:p-7 lg:p-12 mb-12'>
                    <div className="flex justify-center">
                        <h1 className='text-3xl mb-9 text-primary flex items-center'><MdPersonAddAlt className='h-10 mr-3'/> Patient Registration</h1>
                    </div>  
                    {error && (
                        <FormError error={error}/>
                    )}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" required ref={firstNameRef} name="first name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" required ref={lastNameRef} name="last name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">DOB</span>
                        </label>
                        <DatePicker
                            required
                            selected={date}
                            onChange={(dateTime) => dateHandler(dateTime)}
                            className='input input-bordered w-full'
                            dateFormat="d MMMM yyyy"
                        />
                    </div>
                    <div className="form-control mb-9">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <select name="gender" ref={genderRef} className='select select-bordered w-full'>
                            <option value={"female"}>Female</option>
                            <option value={"male"}>Male</option>
                            <option value={"other"}>Other</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button className='btn'>Clear</button>
                        {loading ? (
                            <Loading/>
                        ):(
                            <button type="submit" className='btn btn-primary'>Save</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm