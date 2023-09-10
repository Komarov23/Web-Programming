import './App.css';
import HelloWorld from './components/Hello/hello';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HelloWorld/>
      <Footer/>
    </div>

  );
}

export default App;
