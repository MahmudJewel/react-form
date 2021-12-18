import logo from './logo.svg';
import './App.css';
import UserInfo from './components/bootstrap';


const bk='\n';
function App() {
  return (
    <div style={{background: '#282c34', minHeight:'720px', color:'white'}}>
      {/* <header className="App-header"> */}
      <br />
        <UserInfo />
      {/* </header> */}
    </div>
  );
}

export default App;
