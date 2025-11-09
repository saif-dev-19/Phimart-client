import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from '../components/PrivateRoute';
import ActiveAccount from '../components/Registration/ActiveAccount';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ProductDetials from '../pages/ProductDetials';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import AddProduct from '../pages/AddProduct';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element ={<Home />}></Route> */}
            <Route element = {<MainLayout />}>
                <Route path='/' element= {<Home />} />
                <Route path='about' element = {<About />} />
                <Route path='contact' element = {<Contact />} />
                <Route path='shop' element = {<Shop />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='activate/:uid/:token' element={<ActiveAccount />}/>
                <Route path='shop/:productId' element= {<ProductDetials />} />

            </Route>
            <Route 
                path = "dashboard"
                element={
                    <PrivateRoute >
                        <DashboardLayout />
                    </PrivateRoute>
                }>
                <Route index element ={<Dashboard />}/>
                <Route path='profile' element ={<Profile />}/>
                <Route path='cart' element={<Cart />} />
                <Route path='orders' element={<Orders />} />
                <Route path='products/add' element={<AddProduct />} />
            </Route>
              
        </Routes>
    );
};

export default AppRoutes;