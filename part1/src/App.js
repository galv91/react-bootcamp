
import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Esta es la app del curso fullstack</p>
}

const App = () => {
  return (
    <div className="App">
        <Mensaje color='red' message='Estamos trabajando' />
        <Mensaje color= 'blue'message='En un curso' />
        <Mensaje color='black'message='De React JS' />
        <Description />
    </div>
  );
} 

export default App;
