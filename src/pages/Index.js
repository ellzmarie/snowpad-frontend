import { React, useState } from "react"
import { Link } from 'react-router-dom'

function Index(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        info: "",
        price:"",
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
                <h3>{snowpad.price}</h3>
            </div>
            
        
        ))
     
    }
console.log(props)

    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createSnowpads(newForm)
        setNewForm({
            name: "",
            info: "",
            price:"",
            image: ""
        })
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section >
             <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.info}
                    name="info"
                    placeholder="info"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    value={newForm.price}
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Snowpad" />
            </form>
            {props.snowpads ? loaded() : loading()}
        </section>
    )
}

export default Index;
