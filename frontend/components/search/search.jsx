import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            search: ""
        }
    }


    render() {
        return(
            <div className = "searchbar-container">
                <input type="text" placeholder = "Search" className = "search-input"/>
                <FaSearch className = "search-icon"/>
            </div>
        )
    }
}

export default SearchBar