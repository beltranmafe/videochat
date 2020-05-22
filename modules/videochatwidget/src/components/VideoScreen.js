import React from 'react';
import SuscriberScreen from './SuscriberScreen';
import PublisherScreen from './PublisherScreen';

function showVideoScreen(){
    return(
        <div className="videoscreen">
            <SuscriberScreen/>
            <PublisherScreen/>
        </div>
    );
}

export default showVideoScreen;