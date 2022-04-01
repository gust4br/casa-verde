import './styles/global.scss';
import headVector from './assets/head-vector.svg';

import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <>
    <img className="head-vector" src={headVector} alt="?" />
      <div id='app'>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
