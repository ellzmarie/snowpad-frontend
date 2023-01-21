import { React, useState } from "react"
// import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom"

function Create(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        info: "",
        price:"",
        image: ""
    })
    
    let navigate = useNavigate();

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
        navigate("/");
    }

    return (
        <section className="create-page">
             <form onSubmit={handleSubmit}>
                Name: <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    required
                    onChange={handleChange}
                />
                Image URL:<input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    required
                    onChange={handleChange}
                />
                Information: <input
                    type="text"
                    value={newForm.info}
                    name="info"
                    placeholder="info"
                    required
                    onChange={handleChange}
                />
                Price: <input
                    type="text"
                    value={newForm.price}
                    name="price"
                    placeholder="price"
                    required
                    onChange={handleChange}
                />
               <input type="submit" value="Create Snowpad"  />
            </form>
 
        </section>
    )
}

export default Create;