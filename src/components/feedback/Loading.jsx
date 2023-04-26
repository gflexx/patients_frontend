import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

function Loading() {
    return (
        <div className="align-center justify-center">
            <AiOutlineLoading3Quarters className='mx-auto text-primary animate-spin text-3xl'/>
        </div>
    )
}

export default Loading