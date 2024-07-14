import { NavLink } from "react-router-dom";
import { FiPackage } from "react-icons/fi";
import { AiOutlineUserSwitch } from "react-icons/ai";

export let SIDEBAR = [
    {
        name: "Products",
        label: (
            <NavLink end to="">
                Products
            </NavLink>
        ),
        icon: <FiPackage />,
        key: "products",
    },
    {
        name: "Users",
        label: (
            <NavLink end to="users">
                Users
            </NavLink>
        ),
        icon: <AiOutlineUserSwitch />,
        key: "users",
    },
];
