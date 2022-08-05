import React from "react";

const ReadOnlyRow = ({ place, handleEditClick, handleDeleteClick }) => {
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