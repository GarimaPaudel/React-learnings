import './App.css';
import Resume from './components/Resume';

function App() {
  let resume = {
    experience : [ { year:2012, company:'XYZ', role:'UI/UX Designer' },{ year:2015, company:'ABC', role:'Junior Developer' }],
    education:['SEE : 3.7 GPA  , Mohana Higher Secondary School','SLC : 3.36 GPA , Skyrider Higher Secondary School','B.E. Computer  ,ongoing,  United Technical College' ],
    skills : [ 'html','css','react js']
    
    };
  return (
    <Resume resume={resume}> </Resume>
  );
}

export default App;
