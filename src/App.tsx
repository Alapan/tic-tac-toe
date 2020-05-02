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
						<Box identifier={1}/>
						<Box identifier={2}/>
						<Box identifier={3}/>
					</div>
					<div className='container'>
						<Box identifier={4}/>
						<Box identifier={5}/>
						<Box identifier={6}/>
					</div>
					<div className='container'>
						<Box identifier={7}/>
						<Box identifier={8}/>
						<Box identifier={9}/>
					</div>
				</div>
			</div>
		</StateProvider>
	);
}

export default App;
