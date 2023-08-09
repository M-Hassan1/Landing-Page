
import './App.css';
import AboutPage from './Components/HeroSection/AboutPage';
import FooterPage from './Components/HeroSection/FooterPage';
import Home from './Components/HeroSection/Home';
import NavBar from './Components/NavigationBar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutPage />
      <FooterPage />
    </div>
  );
}

export default App;
