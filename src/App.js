import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import data from "./mock-data.json";
// import ReadOnlyRow from "./components/ReadOnlyRow";
// import EditTableRow from "./components/EditTableRow";
import PlaceTable from "./components/PlaceTable";
import Form from "./components/Form";
// var placeFormData = [
//   {
//     id: 1,
//     placeName: "Jenny Chan",
//     address: "3 waterfoot road",
//     rating: "1",
//   },
// ];
// var placeFormData = data;

const App = () => {
  const [changeText, setChangeText] = useState(false);
  const [places, setPlaces] = useState(
    JSON.parse(localStorage.getItem("places")) || [] 
  );

  // console.log(places);
  // places.map((val, idx)=>{
  //   console.log(idx, val);
  // })
  const [addFormData, setAddFormData] = useState({
    placeName: "",
    address: "",
    rating: "",
  });

  const handleChange = () => {
    setChangeText(!changeText);
  };

  const handleAddFormChange = (e, place) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue; // maybe write like newFormData[e.target.name] = e.target.value

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newPlace = {
      id: nanoid(),
      placeName: addFormData.placeName,
      address: addFormData.address,
      rating: addFormData.rating,
    };

    setPlaces([...places, newPlace]);

    handleChange();
  };

  return (
    <div className='toggle-button'>
      <Button  onClick={() => handleChange()}>
        {!changeText ? "Place List" : "Add Place"}
      </Button>

      {!changeText ? (
        <Form
          handleAddFormSubmit={handleAddFormSubmit}
          handleAddFormChange={handleAddFormChange}
        />
      ) : (
        <PlaceTable places={places} setPlaces={setPlaces} />
      )}
    </div>
  );
};

export default App;
