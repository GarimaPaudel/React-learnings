import logo from './logo.svg';
import './App.css';
import './Components/FunctionalComp';
import FunctionalComp from './Components/FunctionalComp';
import ClassComp from './Components/ClassComp';
import Click from './Components/Click';


function App() {
  return (
    <div>
   <h1>Hello, I am learning MERN Full Stack Development.</h1>
   <FunctionalComp title="Garima"></FunctionalComp>
   <ClassComp></ClassComp>
   <Click></Click>
   </div>
  );
}

export default App;
