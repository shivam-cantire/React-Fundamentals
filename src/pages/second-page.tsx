import React from 'react';

import { Link } from 'react-router-dom';

export default function SecondPage() {
	return (
		<>
			<h2>Second page component</h2>
			<Link to='/'>Go back to entry point</Link>
		</>
	);
}
