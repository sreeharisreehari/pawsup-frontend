import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis,  Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { LineBarAreaComposedChart,CartesianGrid, Bar,Area, ComposedChart } from 'recharts';




const JobPostingsGraph = () => {
 
  const cdata = [
    { name: 'Rehoming', value: 40 },
    { name: 'Adoptions', value: 30 },
    { name: 'Updations', value: 20 },
    { name: 'Messages', value: 10 },
  ];

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      average: 3000,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      average: 2000,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
      average: 2780,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
      average: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
      average: 2390,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
      average: 2000,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      average: 2400,
    },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  
  

  return (
    
   
    <div   className='container'>
  <div  className='row'>
    <div className='col-md-6'>
      <h3>Monthly Pet Adoptions</h3>
      <br />
      <ComposedChart width={350} height={400} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Area type="monotone" dataKey="average" fill="#ffc658" stroke="#8884d8" />
      </ComposedChart>
    </div>
    <div className='col-md-6 text-center'>
      <h3 className='me-md-5'>Statistics</h3>
      <PieChart className='ms-md-4 mb-5' width={400} height={400}>
        <Pie
          data={cdata}
          dataKey='value'
          cx={200}
          cy={200}
          outerRadius={105}
          fill='#8884d8'
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  </div>
</div>

  );
};

export default JobPostingsGraph;