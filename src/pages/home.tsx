import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			This is home <Link to='/first-page'>Go to First page</Link>{' '}
			<Link to='/second-page'>Go to Second page</Link>
		</div>
	);
}
