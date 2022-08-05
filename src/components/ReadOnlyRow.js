import React from "react";

const ReadOnlyRow = ({ place, handleDeleteClick }) => {
  const handleEditClick = (e, place) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('placeName');
    const fieldValue = e.target.value;
    // const newFormData = { ...addFormData };
    // newFormData[fieldName] = fieldValue;

    placeTableFunc();
    console.log(place.id);
    // setAddFormData(newFormData);
  }

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newPlace = {
      id: nanoid(),
      placeName: addFormData.placeName,
      address: addFormData.address,
      rating: addFormData.rating
      // placeName: addFormData.placeName,
    }
    const newPlaces = [...places, newPlace];
    placeFormData = [...places, newPlace];
    setPlaces(newPlaces);

    handleChange();
    console.log(placeFormData);
  }

  const placeTableFunc = () => {
    return (
      <div className="app-container">
        <h2>Add Place</h2>
        <form onSubmit={handleAddFormSubmit}>
          Name :<input
            type="text"
            value={place.placeName}
            name="placeName"
            required='required'
            onChange={handleAddFormChange} />

          Address :<input
            type="text"
            value={place.address}
            name="address"
            id="address"
            onChange={handleAddFormChange} />

          Rating (1-5):<input
            type="number"
            value={place.rating}
            name="rating"
            id="rating"
            min="1" max="5"
            onChange={handleAddFormChange} />
          {/* Picture:<br></br>
<input type="file" id="imgPlace" onchange="previewFile()" />
<br>
</br> */}
          <button type="submit" >Add</button>
        </form>
      </div>
    );
  }



  return (
    <tr>
      <td>{place.placeName}</td>
      <td>{place.address}</td>
      <td>{place.rating}</td>
      <td>{place.image}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, place)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(place.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;