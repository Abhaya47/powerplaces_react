import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">


      <>
      <Layout>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    </BrowserRouter>
    </Layout>

      </>
    </div>

    
  );
}

export default App;
