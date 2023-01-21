import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Create from "../pages/Create"

function Main(props) {
  const [snowpads, setSnowpads] = useState([])
  // save exchange price
  const [exchangeRate, setExchangeRate] = useState([])
  const URL = "https://snowpad-app.herokuapp.com/snowpad";
  // const exchange_URL = "https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=USD&amount=10";

  // get current exchange rate from API
  const getCurrentExchange = async () => {
    const exchange_URL = "https://api.apilayer.com/exchangerates_data/latest?symbols=EUR&base=USD";
    const response = await fetch(exchange_URL, { method: "GET", headers: {apikey: "zIuppiiuS24TdyIgCETg8wV6kZPVQl2b"}})
    await response.json()
      .then((data) => {
        setExchangeRate(data.rates.EUR)
      })
  }
  
  // update prices on snowpad
  const updateSnowpadPrice = async () => {
    // parse for the result
    const new_snowpads = snowpads.map(snowpad => {
      if (snowpad.sign === "$")
      {
        const temp = snowpad.price * exchangeRate;
        snowpad.price = temp;
        snowpad.sign = "€"
        return snowpad;
      }
      else
      {
        const temp = snowpad.price / exchangeRate;
        snowpad.price = temp;
        snowpad.sign = "$"
        return snowpad;
      }
      
    })
    setSnowpads(new_snowpads)
  }
  
  // added "sign" property
  const getSnowpads = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    getCurrentExchange()
    console.log("data")
    data.map(snowpad => {
      snowpad.sign = "$"
    })
    setSnowpads(data)
  }

  const createSnowpads = async (snowpad) => {
    // make post request to create 
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(snowpad),
    })
    // update list of people
    getSnowpads()
  }

  const updateSnowpads = async (snowpad, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(snowpad)
    })
    getSnowpads()
  }

  const deleteSnowpads = async (id) => {
    await fetch(URL + id, {
      method: 'DELETE'
    })
    getSnowpads()
  }

  useEffect(() => {
    getSnowpads()
  }, [])

  return (
    <main>
      {/* convert button added */}
      <button onClick={updateSnowpadPrice}> Convert Currency </button>
      
      <Routes>
        <Route
          exact
          path="/"
          element={<Index snowpads={snowpads} />} />
        <Route
          path="/create"
          element={<Create createSnowpads={createSnowpads} />}
        />
        <Route
          path="/snowpad/:id"
          element={
            <Show
              snowpads={snowpads}
              updateSnowpads={updateSnowpads}
              deleteSnowpads={deleteSnowpads}
            />
          } />
      </Routes>
    </main>
  )
}

export default Main