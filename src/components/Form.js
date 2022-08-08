import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        Picture:<br></br><input
          type="file" id="imgPlace"
          // onchange={"previewFile()"} 
          />
        <img src="" height="40px" width="40px" id="img" alt="Image preview" />
        <br></br>

        <Button type="submit">
          {props.hasOwnProperty("value") ? "Update" : "Add"}
        </Button>
      </form>
    </div>
  );
}
