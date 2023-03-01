import { Routes, Route } from 'react-router-dom';
import ReactHooks from './module/ReactHooks';
import './App.css';

function App() {
  return (
    <div className="App">
      App
      <Routes>
        <Route path="/react-hooks" element={<ReactHooks />} />
      </Routes>
    </div>
  );
}

export default App;
