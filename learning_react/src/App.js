
import './App.css';
import Header from './components/Header';
import {Body, Video} from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <>
 
 <Header />
 <Body/>
 <Video text="React JS Tutorial" views="100K"/>
 <Video text="Node JS Tutorial" views="1M"/>
 <Footer />

 </>
  );
}

export default App;
