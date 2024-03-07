import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  // Sample data for soil moisture levels
  const data = {
    labels: ['Field 1', 'Field 2', 'Field 3', 'Field 4'],
    datasets: [{
      label: 'Soil Moisture Level',
      data: [65, 59, 80, 81],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Options for soil moisture level chart
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Soil Moisture Levels</h3>
        <Bar data={data} options={options} />
      </div>
      {/* Add other dashboard components here */}
    </div>
  );
};

export default Dashboard;
