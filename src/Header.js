import React from 'react';

const Header = ({ image }) => {
	return (
		<div className="div3">
			<img className="div1" src={image} alt="" />
			<div className="div2">
				<h1 className="title-text">Chuck Norris Facts</h1>
			</div>
		</div>
	);
};
export default Header;
