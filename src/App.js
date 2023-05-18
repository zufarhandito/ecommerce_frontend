import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/User';
import Home from './components/Home';
import Product from './components/Product';
import Order from './components/Order';
import Nav from './components/shared/Nav';
import Layout from './components/shared/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/categories" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
