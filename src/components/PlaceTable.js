import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Form from "./Form";
import TableRow from "./TableRow";

const PlaceTable = ({ places, setPlaces }) => {
  const [showForm, setShowForm] = useState(false);
  const [onClickPlace, setOnClickPlace] = useState([]);
  const [editIndex, setEditIndex] = useState();


  useEffect(() => {
    if (places) {
      localStorage.setItem("places", JSON.stringify(places));
    }
  }, [places]);

  const handleEditFormChange = (e, place) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newFormData = { ...onClickPlace };
    newFormData[fieldName] = fieldValue; // maybe write like newFormData[e.target.name] = e.target.value
    setOnClickPlace(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const newPlace = {
    //   id: nanoid(), // not necessary i think
      placeName: onClickPlace.placeName,
      address: onClickPlace.address,
      rating: onClickPlace.rating,
    };
    places[editIndex] = newPlace;
    setPlaces(places);
    localStorage.setItem("places", JSON.stringify(places));
    setShowForm(false)
  };

  return (
    <div>
      <table id="tablePlaces">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Rating ↑↓</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Fragment>
            <TableRow addPlaces={places} setShowForm={setShowForm} 
            setOnClickPlace={setOnClickPlace} setEditIndex={setEditIndex}/>
          </Fragment>
        </tbody>
      </table>
      {showForm && (
        <Form
          value={onClickPlace}
          handleAddFormChange={handleEditFormChange}
          handleAddFormSubmit={handleEditFormSubmit}
        />
      )}
    </div>
  );
}

export default PlaceTable;
