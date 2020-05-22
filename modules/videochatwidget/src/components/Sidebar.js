import React from 'react';
import {
    ChatIcon,
    VideocamOnIcon,
    VideocamOffIcon,
    MicrophoneOnIcon,
    MicrophoneOffIcon,
    ShareScreenIcon   
} from './Icons';

function Sidebar(){
    let icons = [<ChatIcon/>,<VideocamOnIcon/>,<VideocamOffIcon/>,<MicrophoneOnIcon/>,<MicrophoneOffIcon/>,<ShareScreenIcon/>];
    return(
        <nav className="navbar d-flex flex-column bg-secondary sidebar">
        <ul className="navbar-nav d-flex flex-column">
            {icons.map((component, idx) => (
                <li className="nav-item icon">
                    <a className="nav-link btn">{component}</a>
                </li>
            ))} 
        </ul>   
    </nav>
    )
}

export default Sidebar;