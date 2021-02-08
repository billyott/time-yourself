import React from 'react';

import Timer from './timer';
import Time from './time';


class MainContainer extends React.Component {


    render () {
        return (
            <div className="main-container">
                <Timer />
                <Time />
            </div>
        )
    }

}

export default MainContainer;