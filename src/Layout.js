import App from './App';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import Homepage from './components/Home/homepage';
import ManageUser from './components/Admin/Content/ManageUser';
import Dashboard from './components/Admin/Content/Dashboard';
import Login from './components/Auth/Login';
import {
    Route,
    Routes
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Register from './components/Auth/Register';

const Layout = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<App />} >
                    <Route index element={<Homepage />}></Route>
                    <Route path="user" element={<User />} />
                </Route>

                <Route path="/admin" element={<Admin />}>
                    <Route index element={<Dashboard />}></Route>
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>

                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>

            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Layout;