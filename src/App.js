import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SpinnerExample from "./Components/Spinner";
import { selectProduct } from "./Redux/Slices/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from './Redux/Slices/ProductsSlice';
import ProductList from './Components/Products';


const dispatch = useDispatch();
const ReduxToolkitComponent = lazy(() =>
  import("./ReduxToolkit/ReduxComponent")
);

const ReduxComponent = lazy(() => import("./Redux/ReduxComponent"));
const CustomNavbar = lazy(() => import("./Components/CustomNavbar"));

const Home = lazy(() => import("./Components/Home"));
const UpdateProduct = lazy(() => import("./Components/UpdateProduct"));

const ProductDetails = lazy(() => import("./Components/ProductDetails"));
const AddProduct = lazy(() => import("./Components/addProduct"));
const Products = lazy(() => import("./Components/Products"));
const ProductLayout = lazy(() => import("./Components/ProductLayout"));
const NotFound = lazy(() => import("./Components/NotFound"));



const products = useSelector(selectAllProducts);


function App() {
  useEffect(() => {
    dispatch(selectProduct());
  }, [dispatch]);
  return (
    // <Fragement>
    <>
      {/* <Products/> */}
      <Suspense fallback={<SpinnerExample/>}>
        <CustomNavbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/redux" element={<ReduxComponent />} />
          <Route path="/reduxtoolkit" element={<ReduxToolkitComponent />} />

          <Route path="/home/:username" element={<Home />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route path="list" element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />

            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
    // </Fragement>
  );
}

export default App;
