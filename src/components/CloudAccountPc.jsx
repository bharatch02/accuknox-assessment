import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
function CloudAccountPc() {
    const data = [
        {
            name: 'Connected',
            value: 2
        },
        {
            name: 'Not Connected',
            value: 2
        },
    ]
    const COLORS = ['#5478ff', '#e1ebff'];
    return (
        <div className='my-auto min-w-72 grid grid-cols-2'>
            <PieChart width={500} height={220}>
                <Pie
                    data={data}
                    cx={110}
                    cy={90}
                    innerRadius={55}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={4}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='ml-28 my-auto'>

                <div className='flex gap-2 items-center'>
                    <div className='min-h-3 max-h-3 max-w-3 min-w-3 bg-pie-blue border'></div>
                    <div>Connected({data[0].value})</div>
                </div>


                <div className='flex items-center'>
                    <div className='min-h-3 max-h-3 max-w-3 min-w-3 bg-pie-light-blue border'></div>
                    <div className='min-w-40 ml-2'>Not Connected({data[1].value})</div>
                </div>
            </div>
        </div>

    )
}

export default CloudAccountPc
