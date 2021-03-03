import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ image }) => {
	return (
		<div>
			<Navbar bg="transparent">
				<Navbar.Brand style={{ fontSize: '2.75rem', margin: ' 0 auto', display: 'block' }}>
					<a href="https://api.chucknorris.io/">
						<img alt="" src={image} className="d-inline-block align-top icon" />
					</a>{' '}
					Life Lessons From Chuck Norris
				</Navbar.Brand>
			</Navbar>
		</div>
	);
};
export default Header;
