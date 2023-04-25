import React, { useState, useEffect, useRef } from 'react'
import {MdPersonAddAlt} from 'react-icons/md'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RegistrationForm(props) {
    const [date, setDate] = useState()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const genderRef = useRef()
    
    useEffect(() => {}, [date])

    function dateHandler(date){
        setDate(date)
        console.log(date)
    }

    function submitHandler(e){
        e.preventDefault()
    }
    return (
        <div className='flex justify-center mt-12'>
            <div className='w-3/4 md:w-2/4 lg:w-1/3'>
                <form onSubmit={submitHandler} className='bg-base-200 rounded-box p-4 md:p-7 lg:p-12 mb-12'>
                    <div className="flex justify-center">
                        <h1 className='text-3xl mb-9 text-primary flex items-center'><MdPersonAddAlt className='h-10 mr-3'/> Patient Registration</h1>
                    </div>  
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
                            <option value={1}>Female</option>
                            <option value={2}>Male</option>
                            <option value={3}>Other</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <button className='btn'>Clear</button>
                        <button type="submit" className='btn btn-primary'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm