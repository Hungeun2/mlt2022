import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from 'component/Main';
import DetailPage from 'component/DetailPage';
import Header from 'component/common/Header';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:songnum" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default App;
