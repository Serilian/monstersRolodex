import React from 'react';
import "./SearchBox.styles.css";

const SearchBox = ({handleChange, placeholder}) => {
    return (
        <div >
            <input className="search" type='text' onChange={handleChange} placeholder={placeholder} />
        </div>
    );
};

export default SearchBox;