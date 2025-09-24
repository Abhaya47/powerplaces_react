import { Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Places from './pages/Places';


function App() {
  return (
    <div className="App">
      <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/places" element={<Places/>}/>

        </Routes>
    </Layout>

      </>
    </div>

    
  );
}

export default App;
