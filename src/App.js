import './App.css';
import logoImg from './imagens/logo.svg'

function App() {
  return (
    <div className='App'>
      <header className='App-headerSS'>
        <div className='logo'>
          <img src={logoImg}alt='logo Alura Books'></img>
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
