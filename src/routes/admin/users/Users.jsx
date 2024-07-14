import "./Users.css";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Users = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

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
            render: (text, record) => (
                <img src={record.image} alt="" width={100} />
            ),
        },
        {
            title: "Actions",
            render: (record) => (
                <button
                    onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", id: record.id })
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

    return (
        <div>
            <Table rowKey="id" columns={columns} dataSource={products} />
        </div>
    );
};

export default Users;
