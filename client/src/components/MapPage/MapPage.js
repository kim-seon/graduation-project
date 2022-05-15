import React, { useState } from "react";
import MapContainer from "./Sections/MapContainer";

const Map = () => {
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
    
    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText+'동물보호')
        setInputText('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={onChange} value={InputText}></input>
                <button type="submit">검색</button>
            </form>
            <MapContainer searchPlace={Place} />
        </div>
    )
}

export default Map