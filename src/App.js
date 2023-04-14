
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Textplays" about="About"/>
       <div className="container my-3">
        <TextForm heading="Enter text here."/>
       </div>
       <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3">
            © 2023 Copyright:
            <a className="text-dark" href="https://github.com/Harshkrsingh05"> HarshProduction</a>
          </div>
       </footer>
    </>
  );
}

export default App;
