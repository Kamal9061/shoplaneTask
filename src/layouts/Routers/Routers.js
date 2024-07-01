import { Route, Routes } from "react-router-dom";
import AllProduct from "../../product/product"


function AppRouters() {
    return (
        <div className='AppPageConntent'>
        <Routes>
            <Route path="/" element={<AllProduct />}/>       
        </Routes>
        </div>
    );
    
}

export default AppRouters;
