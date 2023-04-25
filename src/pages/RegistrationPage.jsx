import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import RegistrationForm from '../components/patients/RegistrationForm'

function RegistrationPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patient Registration</title>
            </Helmet>
            <div>
                <RegistrationForm/>
            </div>
        </HelmetProvider>
    )
}

export default RegistrationPage