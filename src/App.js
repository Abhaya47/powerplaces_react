import { Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
    </Layout>

      </>
    </div>

    
  );
}

export default App;
