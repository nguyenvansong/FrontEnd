
import ContactPage from '../Pages/ContactPage';
import DiscountPage from '../Pages/DiscountPage';
import HomePage from '../Pages/HomePage';
import LaptopPage from '../Pages/LaptopPage';
import NewPage from '../Pages/NewPage';
import Product from '../Components/Product';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Pay from '../Components/Pay';

const laptopType = ["Laptop Acer","Laptop Asus", "Laptop dell", "Laptop HP", "Laptop"];

const publicRoutes = [
    {path: "/", component: <HomePage />},
    {path: "/laptop/laptopacer", component: <LaptopPage laptopType={laptopType[0]}/>},
    {path: "/laptop/laptopasus", component: <LaptopPage laptopType={laptopType[1]}/>},
    {path: "/laptop/laptopdell", component: <LaptopPage laptopType={laptopType[2]}/>},
    {path: "/laptop/laptophp", component: <LaptopPage laptopType={laptopType[3]}/>},
    {path: "/laptop", component: <LaptopPage laptopType={laptopType[4]}/>},
    {path: "/khuyenmai", component: <DiscountPage />},
    {path: "/tintuc", component: <NewPage />},
    {path: "/lienhe", component: <ContactPage />},
    {path: "/product", component: <Product />},
    {path: "/login", component: <Login />, layout: null},
    {path: "/register", component: <Register />, layout: null},
    {path: "/thanh-toan", component: <Pay />}
]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes};