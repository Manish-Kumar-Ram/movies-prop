
import './App.css';
import Movie from './components/Movie';
import Movies from './DATA/Data';

function App() {
  return (
    <>
      <Movie moviesData={Movies} />
    </>
  );
}

export default App;
