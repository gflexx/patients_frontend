import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {IoPeople} from 'react-icons/io5'
import PatientsTable from '../components/patients/PatientsTable'
import patientServices from '../services/PatientsService'
import Loading from '../components/feedback/Loading'

function PatientListingPage() {
    const [records, setRecords] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)
        patientServices.getPatientRecords().then(
            res => {
                setLoading(false)
                setRecords(res.data)
            },
            err => {
                setLoading(false)
                setError(err)
            }
        )
    }, [])
    return (
        <HelmetProvider>
            <Helmet>
                <title>Patient Listing</title>
            </Helmet>
            <div className='p-3'>
                <div className="flex justify-center">
                    <h1 className='text-3xl mb-6 text-primary flex items-center'><IoPeople className='h-10 mr-3'/> Patient Record Listing</h1>
                </div>
                {loading ? (
                    <div className='flex justify-center'>
                        <Loading/>
                    </div>
                ):(
                    <div>
                        {error ? (
                            <div className='alert alert-warning'>
                                <p className='flex space-x-2 font-bold'>
                                    Something went wrong: 
                                    {error?.message && (
                                        <span>{error?.message}</span>
                                    )}
                                </p>
                            </div>
                        ):(
                            <div>
                                <PatientsTable
                                    records={records}
                                    error={error}
                                />
                            </div>
                        )}
                    </div>
                )}
                
            </div>
        </HelmetProvider>
    )
}

export default PatientListingPage