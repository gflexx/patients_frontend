import React, { useContext, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PatientVitalsForm from '../components/patients/PatientVitalsForm'
import SessionContext from '../context/SessionContext'
import patientServices from '../services/PatientsService'
import { useNavigate } from 'react-router-dom'

function VisitsPage(props) {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const sessionCtx = useContext(SessionContext)
    const patientData = sessionCtx.patientData
    const navigate = useNavigate()

    function submitHandler(details){
        setLoading(true)
        patientServices.addPatientRecord(details).then(
            res => {
                setLoading(false)
                sessionCtx.resetPatientData()
                navigate('/')
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
                <title>Patient Visit</title>
            </Helmet>
            <div>       
                <PatientVitalsForm
                    patientData={patientData}
                    submitHandler={submitHandler}
                    loading={loading}
                    error={error}
                    setError={setError}
                />
            </div>
        </HelmetProvider>
    )
}

export default VisitsPage