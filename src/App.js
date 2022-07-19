import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Main from './components/layout/Main'
import GetStarted from './components/sections/GetStarted';
import GetApp from './components/sections/GetApp';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App font-poppins overflow-hidden">
        <Navbar />
        <Main />
        <GetStarted />
        <GetApp />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
