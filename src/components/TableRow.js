import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableRow = ({ addPlaces, setShowForm, setOnClickPlace, setEditIndex, setPlaces }) => {

  const handleEditClick = (e, place, index) => {
    setOnClickPlace(place);
    setShowForm(true);
    setEditIndex(index);
  };

  const handleDeleteClick = (e, index) => {
    const data = JSON.parse(localStorage.getItem("places"));
    data.splice(index, 1);
    localStorage.setItem("places", JSON.stringify(data));
    setPlaces(data);
  };


  return !addPlaces.length ? (
    <tr>No data available</tr>
  ) : (
    addPlaces.map((place, index) => (
      <tr key={index}>
        <td>{place.placeName}</td>
        <td>{place.address}</td>
        <td>{place.rating}</td>
        <td>{place.image}</td>
        <td>
          <Button
            type="action-button"
            onClick={(event) => handleEditClick(event, place, index)}
          >
            Edit
          </Button>
          <Button type="action-button"
            onClick={(event) => handleDeleteClick(event, index)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ))
  );
};

export default TableRow;
