import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function RegistrationPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patient Registration</title>
            </Helmet>
            <div>Patient Registration</div>
        </HelmetProvider>
    )
}

export default RegistrationPage