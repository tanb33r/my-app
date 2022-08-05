import React from "react"
import EditTableRow from "./EditTableRow"; 
import ReadOnlyRow from "./ReadOnlyRow";
import { Fragment } from "react";

function PlaceTable(props) {
    return (
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
        {/* <div id="tableRows"> */}
        <tbody>
            { props.places.map((place) => (
                <Fragment key= {place.id }>
                    {props.editPlaceId === place.id ?
                        (<EditTableRow />) : (< ReadOnlyRow place={place} />)}
                </Fragment>
            ))}

        </tbody>
        {/* </div> */}
    </table>
    );
};

export default PlaceTable;