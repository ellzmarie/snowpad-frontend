import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

function Show(props) {
  const { id } = useParams();
  const snowpad = props.snowpads.find((snowpad) => snowpad._id === id)
  
  let navigate = useNavigate();

  const [editForm, setEditForm] = useState(snowpad);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateSnowpads(editForm,snowpad._id);
    // redirect people back to index
    navigate("/");
  };

  const removeSnowpads = () => {
    props.deleteSnowpads(snowpad._id);
    // redirect people back to index
    navigate("/")
  };

  return (
    <div className='snowpad-show'>
      <h1>{snowpad.name}</h1>
      <img className="snowpad-image" src={snowpad.image} alt={snowpad.name} />
      <h3>{snowpad.info}</h3>
      <p>price: ${snowpad.price}</p>
      <p>Out of Stock <button id="delete" onClick={removeSnowpads}>
        DELETE
      </button></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.info}
          name="info"
          placeholder="info"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input type="submit" value="Update Snowpad" />
      </form>
    </div>
  );
}

export default Show;