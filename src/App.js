import './App.css';
import Header from './containers/Header';
import WeatherList from './containers/WeatherList';

function App() {
 
  return (
    <div className="App bg-hero-pattern min-h-screen">
      <Header/>
      <WeatherList/>
    </div>
  );
}

export default App;
