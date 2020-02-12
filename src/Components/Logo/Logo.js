import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

//<a target="_blank" href="https://icons8.com/icons/set/brain">Brain icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>


const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner pa3">
				 	<img style={{paddingTop: '5px'}}alt='logo' src={brain}/>
				 </div>
			</Tilt>
		</div>
	);
}

export default Logo;