import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./routes/admin/Admin";
import Products from "./routes/admin/products/Products";
import Users from "./routes/admin/users/Users";

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<Admin />}>
                    <Route path="" element={<Products />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
