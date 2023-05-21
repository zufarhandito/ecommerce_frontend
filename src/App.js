import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/User';
import Home from './components/Home';
import Product from './components/Product';
import Order from './components/Order';
// import Nav from './components/shared/Nav';
import Layout from './components/shared/Layout';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import AddProduct from './components/Products/AddProduct';
import EditProduct from './components/Products/EditProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/create-user" element={<AddUser />} />
            <Route path="/create-product" element={<AddProduct />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/products" element={<Product />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/categories" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
