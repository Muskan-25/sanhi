import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import Footer from './components/layout/Footer';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function App() {
  return (
    <>
      <Home/>
      <Footer/>

      {/* Scroll Top */}
      <IconButton className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </>
  );
}

export default App;
