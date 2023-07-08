import logo from './logo.svg';
import './App.css';
import  Photo from './Component/Profile/ProfilePhoto';
import Name from'./Component/Profile/FullName'
import Adress from'./Component/Profile/Adress'

function App() {
  return (
    <div className="div1">
      <h1 className="title">Welcome to my Profile</h1>
     
      <div className="div2">
        <div><Photo/></div>
        <div><Name/></div>
      </div>
      <div className="div3"><Adress/></div>
    </div>
  );
}

export default App;
