import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {IoPeople} from 'react-icons/io5'
import PatientsTable from '../components/patients/PatientsTable'

function PatientListingPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patient Listing</title>
            </Helmet>
            <div className='p-3'>
                <div className="flex justify-center">
                    <h1 className='text-3xl mb-6 text-primary flex items-center'><IoPeople className='h-10 mr-3'/> Patient Listing</h1>
                </div>
                <div>
                    <PatientsTable/>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default PatientListingPage