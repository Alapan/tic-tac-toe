import { Provider } from 'react-redux';

import Box from './components/Box/Box';
import CrossButton from './components/Button/CrossButton';
import NoughtButton from './components/Button/NoughtButton';
import './App.css';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <CrossButton />
      <NoughtButton />
      <div className='grid'>
        <div className='container'>
          <Box identifier={'a1'}/>
          <Box identifier={'b1'}/>
          <Box identifier={'c1'}/>
        </div>
        <div className='container'>
          <Box identifier={'a2'}/>
          <Box identifier={'b2'}/>
          <Box identifier={'c2'}/>
        </div>
        <div className='container'>
          <Box identifier={'a3'}/>
          <Box identifier={'b3'}/>
          <Box identifier={'c3'}/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
