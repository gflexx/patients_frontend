import React, { useEffect, useState, useRef } from 'react'
import {BsHeartPulse} from 'react-icons/bs'

function PatientVitalsForm(props) {
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [bmi, setBmi] = useState(0)
    const [showSection, setShowSection] = useState(false)
    const commentRef = useRef()

    useEffect(() => {
        if (height > 0 && weight > 0) {
            const meters = height / 100
            const calculatedBmi = weight / (meters * meters)
            setBmi(calculatedBmi)
        }
    }, [height, weight])

    useEffect(() => {
        if (bmi >= 25) {
            setShowSection(true)
        } else{
            setShowSection(false)
        }
    }, [bmi])

    function submitHandler(e){
        e.preventDefault()
    }
    return (
        <div className='flex justify-center mt-12'>
            <div className="w-3/4 md:w-2/4 lg:w-1/3">
                <form onSubmit={submitHandler} className='bg-base-200 rounded-box p-4 md:p-7 lg:p-12 mb-12'>
                    <div className="flex justify-center">
                        <h1 className='text-3xl mb-9 text-primary flex items-center'><BsHeartPulse className='h-10 mr-3'/> Patient Vitals</h1>
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="text" required name="date" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Height (cm)</span>
                        </label>
                        <input 
                            defaultValue={0}
                            onChange={e => setHeight(e.target.value)}
                            type="number" 
                            required 
                            name="height" 
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Weight (kg)</span>
                        </label>
                        <input 
                            defaultValue={0}
                            onChange={e => setWeight(e.target.value)}
                            type="number" 
                            required 
                            name="weight" 
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">BMI</span>
                        </label>
                        <input 
                            value={bmi}
                            readOnly
                            type="number" 
                            name="bmi" 
                            className="input input-bordered w-full " />
                    </div>
                    {showSection && (
                        <div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">General Health ?</span>
                                </label>
                                <div className="form-control px-3">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Good</span> 
                                        <input type="radio" name="general-health" className="radio checked:bg-primary" checked />
                                    </label>
                                </div>
                                <div className="form-control px-3">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Poor</span> 
                                        <input type="radio" name="general-health" className="radio checked:bg-red-500" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Are you currently taking drugs ?</span>
                                </label>
                                <div className="form-control px-3">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Yes</span> 
                                        <input type="radio" name="taking-drugs" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                                <div className="form-control px-3">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">No</span> 
                                        <input type="radio" name="taking-drugs" className="radio checked:bg-red-500" checked/>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comments</span>
                                </label>
                                <textarea 
                                    ref={commentRef}
                                    className="textarea textarea-bordered" 
                                    placeholder="Bio"></textarea>
                            </div>
                        </div>
                    )}
                    <div className="mt-9">
                        <button className='btn btn-primary' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PatientVitalsForm