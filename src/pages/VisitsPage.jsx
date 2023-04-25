import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function VisitsPage(props) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patients Visits</title>
            </Helmet>
            <div>VisitsPage</div>
        </HelmetProvider>
    )
}

export default VisitsPage