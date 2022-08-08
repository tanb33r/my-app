import React from "react";

const TableRow = ({addPlaces, setShowForm ,setOnClickPlace, setEditIndex}) => {

    const handleEditClick = (e, place, index) => {
      setOnClickPlace(place);
      setShowForm(true);
      setEditIndex(index);
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
            <button
              type="button"
              onClick={(event) => handleEditClick(event, place, index)}
            >
              Edit
            </button>
            <button type="button">Delete</button>
          </td>
        </tr>
      ))
    );
  };

export default TableRow;
