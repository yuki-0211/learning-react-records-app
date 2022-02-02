import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SwipeableTemporaryDrawer from './components/organisms/SwipeableTemporaryDrawer';
import { History } from './pages/History';
import { Record } from './pages/Record';
import { Setting } from './pages/Setting';

function App() {
  return (
    <div className="App">
      <SwipeableTemporaryDrawer />
      <Routes>
        <Route path="/" element={<Record />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
