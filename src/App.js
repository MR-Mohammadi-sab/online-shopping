import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nav from './componete/nav';
import { Shop } from './pages/shop/shop.jsx';
import { Cart } from './pages/card/card.jsx';
import { ShopContextProvider } from './context/context.js';
import { Welcome } from './componete/welcome.js';

function App() {
  return (
    <div className="App ">
      <ShopContextProvider>
      <Router>
        <Nav />
        <Welcome />
        <Routes>
        <Route path='/' element={<Shop />}/>
          {/* <Route path='/online-shopping/' element={<Shop />}/> */}
          <Route path='/card' element={<Cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
