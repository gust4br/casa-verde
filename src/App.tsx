import './styles/global.scss';
import headVector from './assets/head-vector.svg';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <img className="head-vector" src={headVector} alt="?" />
      <div id='app'>
        <Header />
      </div>
    </>
  );
}

export default App;
