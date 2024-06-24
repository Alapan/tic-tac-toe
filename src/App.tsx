import { Provider } from 'react-redux';

import Box from './components/Box/Box';
import CrossButton from './components/Button/CrossButton';
import NoughtButton from './components/Button/NoughtButton';
import styles from './App.module.css';
import store from './store';

const App = () => {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <div className={styles.gameGrid}>
          <Box identifier={'a1'}/>
          <Box identifier={'b1'}/>
          <Box identifier={'c1'}/>
          <Box identifier={'a2'}/>
          <Box identifier={'b2'}/>
          <Box identifier={'c2'}/>
          <Box identifier={'a3'}/>
          <Box identifier={'b3'}/>
          <Box identifier={'c3'}/>
        </div>
        <div className={styles.playButtons}>
          <CrossButton />
          <NoughtButton />
        </div>
      </Provider>
    </div>
  );
}

export default App;
