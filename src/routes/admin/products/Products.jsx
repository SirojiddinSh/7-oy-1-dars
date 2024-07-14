import "./Product.css";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

let Product = () => {
    let dispatch = useDispatch();
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let fetchProducts = async () => {
            try {
                let response = await fetch(
                    "https://backend-e-commerce-production.up.railway.app/api/v1/products"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                let data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error.message);
            }
        };
        fetchProducts();
    }, []);

    let addToCart = (id) => {
        dispatch({ type: "ADD_TO_CART", id });
    };

    let columns = [
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
            title: "Add to cart",
            render: (product) => (
                <button
                    onClick={() => addToCart(product)}
                    className="add-to-cart"
                >
                    Add
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

export default Product;
