import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SwipeableTemporaryDrawer } from './components/organisms/SwipeableTemporaryDrawer';
import { History } from './pages/History';
import { Record } from './pages/Record';
import { Setting } from './pages/Setting';
import MenuIcon from '@mui/icons-material/Menu';
import {
  swipeableTemporaryDrawerContext,
  swipeableTemporaryDrawerState,
} from './contexts/swipeableTemproraryDrawer';

function App() {
  const ctxSwipeableTemporaryDrawer = swipeableTemporaryDrawerState();
  const pageName = [
    { name: 'Record', icon: <MenuIcon />, url: '/' },
    { name: 'Hidtory', icon: <MenuIcon />, url: '/history' },
    { name: 'Setting', icon: <MenuIcon />, url: '/setting' },
  ];
  return (
    <div className="App">
      <swipeableTemporaryDrawerContext.Provider
        value={ctxSwipeableTemporaryDrawer}
      >
        <SwipeableTemporaryDrawer list={pageName} />
      </swipeableTemporaryDrawerContext.Provider>
      <Routes>
        <Route path="/" element={<Record />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
