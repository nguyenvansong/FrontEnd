import {Admin} from '../Layout/index';
import ContactPage from '../Pages/ContactPage';
import DiscountPage from '../Pages/DiscountPage';
import HomePage from '../Pages/HomePage';
import LaptopPage from '../Pages/LaptopPage';
import NewPage from '../Pages/NewPage';
import Product from '../Components/Product';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Pay from '../Components/Pay';
import ListCategory from '../Components/Category/ListCategory';
import AddCategory from '../Components/Category/AddCategory';
import EditCategory from '../Components/Category/EditCategory';
import ListBrand from "../Components/Brand/ListBrand"
import AddBrand from "../Components/Brand/AddBrand";
import EditBrand from "../Components/Brand/EditBrand"
import ListImage from "../Components/Image/ListImage";
import AddImage from "../Components/Image/AddImage";
import EditImage from "../Components/Image/EditImage";
import ListProduct from "../Components/ProductAdmin/ListProduct"
import AddProduct from "../Components/ProductAdmin/AddProduct";
import EditProduct from "../Components/ProductAdmin/EditProduct";
import ViewProduct from "../Components/ProductAdmin/Product_Detail";
import ListAccount from "../Components/Account/ListAccount";
import AddAccount from "../Components/Account/AddAccount";
import EditAccount from "../Components/Account/EditAccount";
import ViewAccount from "../Components/Account/Account_Detail";


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
    {path: "/admin/category", component: <ListCategory />, layout: Admin},
    {path: "/admin/category/AddCategory", component: <AddCategory />, layout: Admin},
    {path: "/admin/category/EditCategory/:id", component: <EditCategory />, layout: Admin},
    {path: "/admin/brand", component: <ListBrand />, layout: Admin},
    {path: "/admin/brand/AddBrand", component: <AddBrand />, layout: Admin},
    {path: "/admin/brand/EditBrand/:id", component: <EditBrand />, layout: Admin},
    {path: "/admin/image", component: <ListImage />, layout: Admin},
    {path: "/admin/image/AddImage", component: <AddImage />, layout: Admin},
    {path: "/admin/image/EditImage/:id", component: <EditImage />, layout: Admin},
    {path: "/admin/product", component: <ListProduct />, layout: Admin},
    {path: "/admin/product/AddProduct", component: <AddProduct />, layout: Admin},
    {path: "/admin/product/EditProduct/:id", component: <EditProduct />, layout: Admin},
    {path: "/admin/product/ViewProduct/:id", component: <ViewProduct />, layout: Admin},
    {path: "/admin/account", component: <ListAccount />, layout: Admin},
    {path: "/admin/account/AddAccount", component: <AddAccount />, layout: Admin},
    {path: "/admin/account/EditAccount/:id", component: <EditAccount />, layout: Admin},
    {path: "/admin/account/ViewAccount/:id", component: <ViewAccount />, layout: Admin},
]


const privateRoutes = [
    
]

export {publicRoutes, privateRoutes};