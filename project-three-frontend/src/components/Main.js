import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
    const [snowpads, setSnowpads] = useState(null)

    const URL = "http://localhost:4000/snowpad/";

    const getSnowpads = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setSnowpads(data)
       
    }
    const createSnowpads = async (snowpad) => {
        // make post request to create people
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

    useEffect(() => getSnowpads(), [])

    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Index snowpads={snowpads} />} />
                <Route path="/snowpads/:id" element={<Show />} />
            </Routes>
        </main>
    )
}

export default Main