import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PatientVitalsForm from '../components/patients/PatientVitalsForm'

function VisitsPage(props) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patient Visit</title>
            </Helmet>
            <div>
                <PatientVitalsForm/>
            </div>
        </HelmetProvider>
    )
}

export default VisitsPage