import React from 'react';
import { Link } from 'react-router-dom';

class entry extends React.Component {
render () {
    return (
        <form id="entryForm">
            <label id='entryLinkLabel' htmlFor='entryLinkInput'>Paste Link Here!</label>
            <input id='entryLinkInput'></input>
            <label id='artistNameLabel' htmlFor='artistNameInput'>Who is this Artist?</label>
            <input id='artistNameInput'></input>
            <label id='songNameLabel' htmlFor='songNameInput'>What is this song called?</label>
            <input id='songNameInput'></input>
            <button type='submit'>Create Test!</button>
        </form>
    );
}
}

export default entry;