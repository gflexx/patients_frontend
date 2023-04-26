import React, { useEffect } from 'react'

function FormError(props) {
    const error = props.error
    useEffect(() => {}, [error])
    return (
        <div className='alert alert-warning mb-3'>
            <p className='text-center flex space-x-2'>
                An error occured: 
                {error?.response?.data?.message?.dob && (
                    <span>{error?.response?.data?.message?.dob}</span>
                )}
                {error?.message && (
                    <span>{error?.message}</span>
                )}
            </p>
        </div>
    )
}

export default FormError