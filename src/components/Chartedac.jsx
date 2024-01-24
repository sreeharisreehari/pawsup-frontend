import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const JobPostingsGraph = () => {
  const jobPostingsData = [
    { month: 'Jan', count: 50 },
    { month: 'Feb', count: 75 },
    { month: 'Mar', count: 90 },
    { month: 'Apr', count: 60 },
    { month: 'May', count: 110 },
    { month: 'Jun', count: 80 },
  ];
  const data = [
    { name: 'Rehoming', value: 40 },
    { name: 'Adoptions', value: 30 },
    { name: 'Updations', value: 20 },
    { name: 'Messages', value: 10 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  

  return (
    
    <div className='container'>
     <div className='row'>
       <div className='col-6'>
          <h3>Monthly Pet Adoptions</h3>
          <br />
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={jobPostingsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
       </div>
       <div className='col-6'>
        
       <center> <h3 className='me-5'>Statistics</h3></center>
       <PieChart className='ms-5 mb-5' width={400} height={400}>
        <Pie
          data={data}
          dataKey='value'
          cx={200}
          cy={200}
          outerRadius={100}
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