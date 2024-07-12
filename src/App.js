import './App.css';
import pages from './pages';

const {LandingPage, Home} = pages;

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Home/>
    </div>
  );
}

export default App;
