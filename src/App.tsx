import './App.css';
import { AppBarBasic } from './components/molecules/AppBarBasic';
import SwipeableTemporaryDrawer from './components/organisms/SwipeableTemporaryDrawer';
import { Recoder } from './pages/Recoder';

function App() {
  const onClick = () => {};
  return (
    <div className="App">
      <SwipeableTemporaryDrawer />
      <Recoder />
    </div>
  );
}

export default App;
