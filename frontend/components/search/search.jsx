import React from 'react';

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
                <input type="text" placeholder = "Search"/>
            </div>
        )
    }
}

export default SearchBar