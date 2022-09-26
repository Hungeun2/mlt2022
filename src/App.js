import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from 'component/Main';
import DetailPage from 'component/DetailPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:songnum" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
