import { React, useState } from "react"
import { Link } from 'react-router-dom'

function Index(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        info: "",
        price: "",
        image: ""
    })

    const loaded = () => {
        return props.snowpads.map((snowpad) => (
            <div key={snowpad._id} className="snowpad">

                <Link to={`/snowpad/${snowpad._id}`}>
                    <h1>{snowpad.name}</h1>
                </Link>

                <img src={snowpad.image} alt={snowpad.name} />
                <h3>{snowpad.info}</h3>
                <h3>${snowpad.price}</h3>
            </div>


        ))

    }
    console.log(props)

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section >

            {props.snowpads ? loaded() : loading()}
        </section>
    )
}

export default Index;