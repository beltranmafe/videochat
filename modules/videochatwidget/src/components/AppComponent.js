import React from 'react';
import Sidebar from './Sidebar';
import VideoScreen from './VideoScreen';



export default class extends React.Component {
	render() {
		return (
			<div className="d-flex">
				<Sidebar/>
				<VideoScreen/>
			</div>
		);
	}	
}