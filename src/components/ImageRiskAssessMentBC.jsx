import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer , LabelList} from 'recharts';

const ImageRiskChart = () => {
  const data = [
    {
      name: 'Total Vulnerabilities',
      Critical: 90,
      High: 150,
      Medium: 572,
      Low: 738,

    },
  ];

  return (
    <div style={{ width: '100%', height: 70}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={200}
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Legend />

          <Bar dataKey="Critical" stackId="a" fill="#6e130a" radius={[10, 0, 0, 10]} />

          <Bar dataKey="High" stackId="a" fill="#ca2a1d" radius={[0, 0, 0, 0]} />
          <Bar dataKey="Medium" stackId="a" fill="#ee9134" radius={[0, 0, 0, 0]} />
          <Bar dataKey="Low" stackId="a" fill="#f4c644" radius={[0, 10, 10, 0]} />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImageRiskChart;
