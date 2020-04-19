import React from 'react';
import Box from './Box';
import CrossButton from './CrossButton';
import NoughtButton from './NoughtButton';
import { StateProvider } from './state';
import './App.css';

const App: React.FC = () => {
	return (
		<StateProvider>
			<div>
				<CrossButton />
				<NoughtButton />
				<div className='grid'>
					<div className='container'>
						<Box />
						<Box />
						<Box />
					</div>
					<div className='container'>
						<Box />
						<Box />
						<Box />
					</div>
					<div className='container'>
						<Box />
						<Box />
						<Box />
					</div>
				</div>
			</div>
		</StateProvider>
	);
}

export default App;
