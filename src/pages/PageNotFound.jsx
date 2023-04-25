import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function PageNotFound() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <div>Page Not Found</div>
        </HelmetProvider>
    )
}

export default PageNotFound