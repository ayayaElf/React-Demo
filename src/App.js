import logo from './logo.svg';
import './App.css';
import FunCom from './Components/FunCom';
import ClassCom from './Components/ClassCom';
// import EventCom from './Components/EventCom';
import LoginControl from './Components/LoginControlCom';
import NumberList from './Components/NumberListCom'

function App() {
  function formatName(user) {
    if (user) return `${user.firstName} ${user.lastName}!`
    return `World!`
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };

  const numbers = [1, 2, 3, 4, 5];

  // 防止注入攻击
  // 所有内容在渲染之前都被转义为字符串
  const element = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {formatName(user)}</h1>
        <NumberList numbers={numbers}/>
        <LoginControl/>
        {/* <EventCom/> */}
        <ClassCom/>
        <FunCom name='Sare'/>
        <FunCom name='Cahal'/>
      </header>
    </div>
  )

  return (
    element
  );
}

export default App;
