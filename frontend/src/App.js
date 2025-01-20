import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const backendApiUrl = process.env.REACT_APP_BACKEND_API_URL ;
    fetch(`${backendApiUrl}/data`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log('Backend API URL:', process.env.REACT_APP_BACKEND_API_URL);

  return (
    <div>
      <h1>3-Tier Microservices Example</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

