import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function PatientListingPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patient Listing</title>
            </Helmet>
            <div>Patient Listing</div>
        </HelmetProvider>
    )
}

export default PatientListingPage