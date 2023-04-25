import React from 'react'

function PatientsTable(props) {
    return (
        <div className='flex justify-center'>
            <div className="w-10/12 md:w-8/12 lg:w-6/12">
                <div className="">
                    <div className='overflow-x-auto mt-4'>
                        <table className="table table-compact table-zebra w-full">
                            <thead className=''>
                                <tr>
                                    <th></th>
                                    <th>Full Names</th>
                                    <th>Age</th>
                                    <th>BMI Status</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientsTable