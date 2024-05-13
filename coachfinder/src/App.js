import logo from './components/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import LoginComponent from './components/login';
import RegisterComponent from './components/register';

function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      <>
        <LoginComponent />
        {/* <RegisterComponent /> */}
      </>
      }
    </div>
  );
}

export default App;
