import { useEffect, useState, useSyncExternalStore } from 'react'
import './App.css'

function App() {
  //'https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD'

  const [resultado, setresultado] = useState(0);
  const [moedafrom, setmoedafrom] = useState("BRL");
  const [moedato, setmoedato] = useState("USD");
  const [amount, setamount] = useState(1);

useEffect(() => {
  async function getValues() {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${moedafrom}&to=${moedato}`);
    const data = await res.json();
    setresultado(data.rates[moedato]);
  }

  getValues();
}, [moedafrom, moedato, amount]);

return (
  <>
      <input type='text' value={amount} onChange={(e) => setamount (Number(e.target.value))}/>
      <select name='moeda-1' id='moeda-1' value={moedafrom} onChange={(e) => setmoedafrom(e.target.value)}>
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      <select name='moeda-2' id='moeda-2' value={moedato} onChange={(e) => setmoedato(e.target.value)}
      >
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      <p id='resultado'>{resultado}</p>
    </>
  );
}

export default App
