import { Link } from 'react-router-dom';
import React from 'react';
export default function FirstPage() {
	return (
		<>
			<h2>First page component</h2>
			<Link to='/'>Go back to entry point</Link>
		</>
	);
}
