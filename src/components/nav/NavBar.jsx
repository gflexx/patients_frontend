import React from 'react'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {AiFillFileAdd} from 'react-icons/ai'

function NavBar() {
    return (
        <div className='p-3 px-7 mb-4 bg-base-200'>
            <div className="flex justify-between items-center font-bold">
                <div>
                    <a href="/" className='hover:text-primary'>Patients</a>
                </div>
                <div>
                    <a href="/visits">
                        <div className="flex space-x-2 items-center hover:text-primary">
                            <AiFillFileAdd className='h-9'/>
                            <p>Add Record</p>
                        </div>
                    </a>
                </div>
                <div className=''>
                    <a href="/register">
                        <div className="flex space-x-2 items-center hover:text-primary">
                            <BsFillPersonPlusFill className='h-9'/>
                            <p>Register Patient</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar