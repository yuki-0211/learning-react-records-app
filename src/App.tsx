import './App.css';
import { AppBarBasic } from './components/molecules/AppBarBasic';
import { Recoder } from './pages/Recoder';

function App() {
  const onClick = () => {};
  return (
    <div className="App">
      <AppBarBasic pageName="Record" onClick={onClick} />
      <Recoder />
    </div>
  );
}

export default App;
