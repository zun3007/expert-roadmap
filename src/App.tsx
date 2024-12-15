import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import DynamicTitle from './components/DynamicTitle';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-sakura-50 to-sakura-100 dark:from-night-800 dark:to-night-900 transition-colors duration-300'>
      <DynamicTitle />
      <Navbar />
      <main className='container mx-auto pt-24 pb-8 py-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roadmap' element={<Roadmap />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
