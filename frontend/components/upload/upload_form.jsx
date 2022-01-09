import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';

class UploadForm extends React.Component {

    constructor(props) {
        super(props)
    }

     componentWillUnmount() {
        this.props.removeSongErrors();
    }

    render() {

        return (
            <div>
                <NavBarContainer/>
                <div className = 'upload-container'>
                    <div className = 'upload-form-container'>
                        <div>

                        </div>
                        
                        <div>

                        </div>
                        
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UploadForm;