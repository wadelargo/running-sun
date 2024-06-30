import { useState } from 'react'


function App() {
  const [dividendGerry, setInvestmentGerry] = useState()
  const [dividendMary, setInvestmentMary] = useState()
  const [dividendLerry, setInvestmentLerry] = useState()
  const [totalInvestment, setTotalInvestment] = useState()
  const [totalDividend, setTotalDividend] = useState()

  const compute = () => {
    const investmentGerry = document.getElementById('investmentGerry');
    const investmentMary = document.getElementById('investmentMary');
    const investmentLerry = document.getElementById('investmentLerry');

    const divGerry = (0.1)*(investmentGerry.value);
    const divMary = (0.1)*(investmentMary.value);
    const divLerry = (0.1)*(investmentLerry.value);
    const totalIn = (investmentGerry.value*1) + (investmentMary.value*1) + (investmentLerry.value*1);
    const totaldiv = divGerry + divMary + divLerry

    setInvestmentGerry(divGerry);
    setInvestmentMary(divMary);
    setInvestmentLerry(divLerry)
    setTotalInvestment(totalIn);
    setTotalDividend(totaldiv);
  }

  return (
    <div className="ml-[150%] w-max text-center border border-black rounded">
      <h1>Running Sum</h1>
      <div className="m-2">
        <table className=''>
          <thead>
            <th>Contributor</th>
            <th>Investment</th>
            <th>Dividend</th>
          </thead>
          <tbody>
            <tr className='p-8'>
              <td className='px-2'>Gerry Webb</td>
              <td className='px-2'><input type="number" name="investment" id="investmentGerry" onChange={compute} className='border border-black'/></td>
              <td className='px-2'>{dividendGerry}</td>
            </tr>
            <tr className='p-8'>
              <td className='px-2'>Mary Telcro</td>
              <td className='px-2'><input type="number" name="investment" id="investmentMary" onChange={compute} className='border border-black'/></td>
              <td className='px-2'>{dividendMary}</td>
            </tr>
            <tr className='p-8'>
              <td className='px-2'>Lerry Lerg</td>
              <td className='px-2'><input type="number" name="investment" id="investmentLerry" onChange={compute} className='border border-black'/></td>
              <td className='px-2'>{dividendLerry}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex mt-2 justify-around">
          <h2>Total</h2>
          <h2>{totalInvestment}</h2>
          <h2 className=''>{totalDividend}</h2>
        </div>
      </div>
    </div>
  )
}

export default App