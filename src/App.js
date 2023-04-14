
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Textplays" about="About"/>
       <div className="container my-3">
        <TextForm heading="Enter text here."/>
       </div>
    </>
  );
}

export default App;
