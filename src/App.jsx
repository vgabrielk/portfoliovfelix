import { useEffect, useState } from 'react';

import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import './responsive.css';
import 'aos/dist/aos.css'
import Aos from 'aos';
import Footer from './components/Footer/Footer';

function App() {

  const [theme, setTheme] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, [])

  const switchTheme = () => {
    setTheme(!theme)
  }

  return (
    <>
      <div className="body" style={{ background: theme ? '#010409' : '#dadada' }} >
        <div className="header" style={{ background: theme ? '#161B22' : '#dadada' }} >
          <div className="button-switcher" style={{ background: theme ? '#fff' : '#161B22' }} onClick={switchTheme} >
            {theme ? <span>☀️</span> : <span>🌙</span>}
          </div>

        </div>
        <Home theme={theme} setTheme={setTheme} />
        <Projects theme={theme} setTheme={setTheme} />
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
