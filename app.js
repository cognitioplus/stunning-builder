import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [price, setPrice] = useState(null);

  async function calculate() {
    const res = await axios.post('/api/pricing/calculate', {
      tier: "affordable",
      vulnerability: "lowIncome",
      urban: "urban",
      funder: "yes",
      promo: "mentalhealthmonth"
    });
    setPrice(res.data.price);
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Cognitio+ Service Builder</h2>
      <button onClick={calculate}>Calculate Price</button>
      {price && <p>Estimated Monthly Price: ₱{price}</p>}
    </div>
  );
}

export default App;
