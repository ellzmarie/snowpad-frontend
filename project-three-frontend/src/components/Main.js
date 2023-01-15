import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
    const [snowpads, setSnowpads] = useState([])
    const URL = "http://localhost:4000/snowpad/";

    const getSnowpads = async () => {
        const response = await fetch(URL)
        const data = await response.json()
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
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Index snowpads={snowpads} createSnowpads={createSnowpads} />} />
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