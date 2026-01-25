import React, {useState} from 'react';

function ColorPicker() {
    // creating stateful name variable w/ setter function
    // initial value is a hexadecimal color
    const [color, setColor] = useState("#FFFFFF");

    // this function will handle changing the color
    // invoke set color function, access the event object, access target and get value property
    function handlecolorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select A Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker