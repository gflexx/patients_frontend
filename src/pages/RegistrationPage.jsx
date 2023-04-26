import React, { useState, useContext, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import RegistrationForm from '../components/patients/RegistrationForm'
import patientServices from '../services/PatientsService'
import SessionContext from '../context/SessionContext'
import { useNavigate } from 'react-router-dom'

function RegistrationPage() {
    const [error, setError] =  useState()
    const [loading, setLoading] = useState(false)
    const sessionCtx = useContext(SessionContext)
    const navigate = useNavigate()

    useEffect(() => {}, [error])

    function submitHandler(details){
        setLoading(true)
        patientServices.registerPatient(details).then(
            res => {
                setLoading(false)
                console.log(res.data);
                sessionCtx.setPatientData(res.data)
                navigate('/visits')
            },
            err => {
                setLoading(false)
                setError(err)
            }
        )
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patient Registration</title>
            </Helmet>
            <div>
                <RegistrationForm
                    submitHandler={submitHandler}
                    error={error}
                    setError={setError}
                    loading={loading}
                />
            </div>
        </HelmetProvider>
    )
}

export default RegistrationPage