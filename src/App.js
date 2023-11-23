import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';
import { Router as BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/*" element={<EmptyPage />} />
          <Route path="/create_word" element={<CreateWord/>}/>
          <Route path="/create_day" element={<CreateDay/>}/>
        </Routes>
      </div>  
    </>
  );
}

export default App;
