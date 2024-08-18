import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
function CloudAccountRiskAssessmentPC() {
  const data = [
    {
      name: 'failed',
      value: 1689
    },
    {
      name: 'warning',
      value: 681
    },
    {
      name: 'Not available',
      value: 36
    },
    {
      name: 'passed',
      value: 7253
    }
  ]
  const COLORS = ['#b9140e', '#fad733', '#cad7db', '#19a45a'];
  return (
    <div className='my-auto grid grid-cols-2'>
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

      <div className='ml-32 my-auto'>
        {COLORS.map((color , index) => (
          <div key={index} className='flex items-center gap-1'>
            <div className= {`bg-blue-300 min-h-3 min-w-3 
            ${index === 0 ? `bg-failed` : ``}
            ${index === 1 ? `bg-warning` : ``}
            ${index === 2 ? `bg-na` : ``}
            ${index === 3 ? `bg-pass` : ``}`}></div>
            <div className='min-w-36'>{data[index].name}  ({data[index].value})</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CloudAccountRiskAssessmentPC
