import React, { useEffect, useState, useRef, useContext } from 'react'
import {BsHeartPulse} from 'react-icons/bs'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from '../feedback/Loading';
import moment from 'moment'
import FormError from '../feedback/FormError';
import SessionContext from '../../context/SessionContext';
import patientServices from '../../services/PatientsService';
import PatientSelectItem from './PatientSelectItem';

function PatientVitalsForm(props) {
    const [date, setDate] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [bmi, setBmi] = useState(0)
    const [trakinDrugs, setTakinDrugs] = useState(false)
    const [generalHealth, setGeneralHealth] = useState("good")
    const [showSection, setShowSection] = useState(false)
    const [patients, setPatients] = useState([])
    const commentRef = useRef()
    const loading = props.loading
    const error = props.error
    const patientData = props.patientData
    const sessionCtx = useContext(SessionContext)

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

    useEffect(() => {}, [error])
    useEffect(() => {}, [loading])
    useEffect(() => {
        if (patientData === null) {
            patientServices.getPatients().then(
                res => {
                    console.log(res.data);
                    setPatients(res.data)
                }
            )
        }
    }, [patientData])

    function patientSelector(patient){
        sessionCtx.setPatientData(patient)
    }

    function changeDrugStatus(e){
        setTakinDrugs(e.target.value)
    }

    function changeGeneralHealthStatus(e){
        setGeneralHealth(e.target.value)
    }

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
        formData.append("takin_drugs", trakinDrugs)
        formData.append("general_health", generalHealth)
        formData.append("comments", commentRef.current.value)
        formData.append("height", height)
        formData.append("weight", weight)
        formData.append("bmi", parseInt(bmi))
        formData.append("patient", patientData?.id) 
        formData.append("date", `${year}-${month}-${day}`)  
        props.submitHandler(formData)     
    }
    return (
        <div className='flex justify-center mt-12'>
            <div className="w-3/4 md:w-2/4 lg:w-1/3">
                <form onSubmit={submitHandler} className='bg-base-200 rounded-box p-4 md:p-7 lg:p-12 mb-12'>
                    <div className="flex justify-center">
                        <h1 className='text-3xl mb-9 text-primary flex items-center'><BsHeartPulse className='h-10 mr-3'/> Patient Vitals</h1>
                    </div>
                    {patientData === null ? (
                        <span>
                            <div className='alert alert-warning mb-5'>
                                <p className='text-center text-lg font-bold'>Patient Data is needed, please register patient first</p>
                            </div>
                            <div className="flex justify-center">
                                <label htmlFor="patients-modal" id='modal-open-btn' className="btn btn-primary">Choose Existing Patient</label>
                                <input type="checkbox" id="patients-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="patients-modal" id='modal-close-btn' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="font-bold text-center text-lg mb-5">Choose patient.</h3>
                                        {patients.map((patient, idx) => (
                                            <PatientSelectItem
                                                key={idx}
                                                idx={idx}
                                                patient={patient}
                                                patientSelector={patientSelector}
                                            />
                                        ))}
                                        {patients.length === 0 && (
                                            <div className='text-center font-bold'>
                                                No patients added yet.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </span>
                    ):(
                        <div className=''>
                            <p className='text-center text-lg font-bold mb-3'>Add details for: {patientData?.first_name} {patientData?.last_name}</p>
                            {error && (
                                <FormError error={error}/>
                            )}
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <DatePicker
                                    selected={date}
                                    onChange={(dateTime) => dateHandler(dateTime)}
                                    className='input input-bordered w-full'
                                    dateFormat="d MMMM yyyy"
                                    required />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Height (cm)</span>
                                </label>
                                <input 
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
                            <div className={showSection ? "" : "hidden"}>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">General Health ?</span>
                                    </label>
                                    <div className="form-control px-3">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Good</span> 
                                            <input 
                                                type="radio" 
                                                value="good" 
                                                name="general-health" 
                                                className="radio checked:bg-primary" 
                                                defaultChecked
                                                onChange={changeGeneralHealthStatus} />
                                        </label>
                                    </div>
                                    <div className="form-control px-3">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Poor</span> 
                                            <input 
                                                type="radio" 
                                                value="poor" 
                                                name="general-health" 
                                                className="radio checked:bg-red-500"
                                                onChange={changeGeneralHealthStatus} />
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
                                            <input 
                                                type="radio" 
                                                value="true" 
                                                name="taking-drugs" 
                                                className="radio checked:bg-primary" 
                                                onChange={changeDrugStatus} />
                                        </label>
                                    </div>
                                    <div className="form-control px-3">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">No</span> 
                                            <input 
                                                type="radio" 
                                                value="fasle" 
                                                name="taking-drugs" 
                                                className="radio checked:bg-red-500" 
                                                defaultChecked
                                                onChange={changeDrugStatus} />
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
                            {loading ? (
                                <Loading/>
                            ):(
                                <div className="mt-9">
                                    <button className='btn btn-primary' type="submit">Submit</button>
                                </div>
                            )}
                        </div>
                    )}
                    
                </form>
            </div>
        </div>
    )
}

export default PatientVitalsForm