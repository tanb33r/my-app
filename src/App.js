import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
// import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditTableRow from "./components/EditTableRow";
import PlaceTable from "./components/PlaceTable";
var placeFormData = [
    {
        "id": 1,
        "placeName": "Jenny Chan",
        "address": "3 waterfoot road",
        "rating": "1"
    }
]
// var placeFormData = data;

const App = () => {
    let [changeText, setChangeText] = useState(true);
    const handleChange = () => {
        return setChangeText(!changeText);
    };

    const [places, setPlaces] = useState(placeFormData);
    const [addFormData, setAddFormData] = useState({
        placeName: "",
        address: "",
        rating: ""
    });

    const [editPlaceId, setEditPlaceId] = useState(null);
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
        console.log(placeFormData);
    }

    let props = {
        places: placeFormData,
        editPlaceId: editPlaceId
    }
    let toggle = 0;

    return (
        <div>
            <button onClick={() => handleChange()}>click me</button>
            {changeText ?  <PlaceTable {...props} /> :  <div className="app-container">
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

                    {/* Picture:<br></br>
                <input type="file" id="imgPlace" onchange="previewFile()" />
                <br>
                </br> */}
                    <button type="submit">Add</button>
                </form>
            </div>}
        </div>
    );

  
    if (toggle === 0) {
        return (
            <div className="app-container">
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

                    {/* Picture:<br></br>
                <input type="file" id="imgPlace" onchange="previewFile()" />
                <br>
                </br> */}
                    <button type="submit">Add</button>
                </form>
            </div>
        );

    }}

    export default App;