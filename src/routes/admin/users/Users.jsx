import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Users = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    console.log(products);

    const columns = [
        {
            key: "sort",
            align: "center",
            width: 80,
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (product) => <img src={product} alt="" width={100} />,
        },
        {
            title: "Actions",
            render: (product) => (
                <button
                    onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", id: product.id })
                    }
                    className="remove-to-cart"
                >
                    Remove
                </button>
            ),
        },
        {
            title: (
                <button
                    className="clear-cart"
                    onClick={() => dispatch({ type: "CLEAR_CART" })}
                >
                    Clear cart
                </button>
            ),
        },
    ];

    console.log(products);

    return (
        <div>
            <h1>Users</h1>
            <Table rowKey="id" columns={columns} dataSource={products} />
        </div>
    );
};

export default Users;
