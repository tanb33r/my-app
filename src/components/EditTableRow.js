import React from "react";

const EditTableRow = ({ place, handleEditClick, handleDeleteClick }) => {
  
  
  return
  (<div>
    <button type="submit">Add</button>


    <h2>Add Place</h2>
    <form onSubmit={handleAddFormSubmit}>
      Name :<input
        type="text"
        name="placeName"
        required='required'
        onChange={handleAddFormChange} />

      Address :<input
        type="text"
        name="address"
        id="address"
        onChange={handleAddFormChange} />

      Rating (1-5):<input
        type="number"
        name="rating"
        id="rating"
        min="1" max="5"
        onChange={handleAddFormChange} />
      <button type="submit">Add</button>
    </form>
  </div >


  )
};

export default EditTableRow;