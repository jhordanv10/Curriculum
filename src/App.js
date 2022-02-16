
import Header from './components/moleculas/header';
import Bar from './components/moleculas/bar';
import Footer from './components/moleculas/footer';
import Arrow from './components/atoms/arrow';

import './App.css';

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Bar/>
      <Arrow />
      <Footer/> 
    </div>
  );
}
export default App;
