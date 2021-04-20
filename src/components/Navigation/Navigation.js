import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange, currentRoute}) => {
	return(
		<div>
			{currentRoute === 'home' ?
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p className="button f4" onClick={()=>onRouteChange('signin')}>Sign out</p>
			</div> :
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p className="button f4" onClick={()=>onRouteChange('signin')}>Sign in</p>
				<p className="button f4" onClick={()=>onRouteChange('register')}>Register</p>
			</div>
			}
		</div>
	)
}

export default Navigation;