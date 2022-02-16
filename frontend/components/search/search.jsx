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
            <div>
                Search
            </div>
        )
    }
}

export default SearchBar