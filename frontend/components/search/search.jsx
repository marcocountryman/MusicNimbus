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

        this.setSearch = this.setSearch.bind(this);
    }

    setSearch(e) {
        this.setState({ search: e.target.value })
    }

    render() {
        
        return(
            <div>
                <div className = "searchbar-container">
                <input type="text" 
                placeholder = "Search" 
                className = "search-input"
                onChange = {this.setSearch}
                />
                <FaSearch className = "search-icon"/>
                </div>
                <div className = {}>
                        SEARCH Working?
                </div>
            </div>
          
        )
    }
}

export default SearchBar