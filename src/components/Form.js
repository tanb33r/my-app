import React from "react";

export default function Form(props) {
  return (
    <div className="app-container">
      <h2>{props.hasOwnProperty("value") ? "Edit Place" : "Add Place"}</h2>
      <form onSubmit={props.handleAddFormSubmit}>
        Name :
        <input
          type="text"
          name="placeName"
          required="required"
          onChange={props.handleAddFormChange}
          value={props.value?.placeName}
        />
        Address :
        <input
          type="text"
          name="address"
          id="address"
          onChange={props.handleAddFormChange}
          defaultValue={props.value?.address}
        />
        Rating (1-5):
        <input
          type="number"
          name="rating"
          id="rating"
          min="1"
          max="5"
          onChange={props.handleAddFormChange}
          defaultValue={props.value?.rating}
        />
        <button type="submit">
          {props.hasOwnProperty("value") ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
