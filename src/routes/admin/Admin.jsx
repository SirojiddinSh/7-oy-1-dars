import "./Admin.css";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { SIDEBAR } from "../../static/links";
import Nav from "../../components/nav/Nav";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin">
            <Layout style={{ height: "100%" }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={SIDEBAR}
                    />
                </Sider>
                <Layout style={{ background: "gray" }}>
                    <Nav navLocation={"admin"} />
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            background: "white",
                            borderRadius: "10px",
                            overflow: "auto",
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Admin;
