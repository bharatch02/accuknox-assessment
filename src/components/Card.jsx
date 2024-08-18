import React from 'react'
import CloudAccountPc from './CloudAccountPc'
import CloudAccountRiskAssessmentPC from './CloudAccountRiskAssessmentPC'

function Card() {
    const courses = [
        {
            title: 'web development',
            duration: '2 hours'
        },
        {
            title: 'app development',
            duration: '2 hours'
        },
        {
            title: 'UI designer',
            duration: '2 hours'
        }
    ]
    return (
        <div className='grid md:grid-cols-3 gap-3 justify-center mr-10 sm:grid-cols-1'>
            {courses.map((item) => (

                <div className='bg-white min-w-96 rounded-xl min-h-52 shadow-2xl shadow-gray-500'>
                    <div className='text-md font-semibold p-3'>{item.title}</div>
                    <div className='grid grid-cols-2'>
                        <div className='text-center items-center'>
                            <CloudAccountRiskAssessmentPC />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
