import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Grid } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const { useBreakpoint } = Grid;

const { Sider, Content } = Layout;

const AppLayout = ({ children }) => {
    const router = useRouter();
    const screens = useBreakpoint();

    useEffect(() => {
        console.log(screens);
    }, [screens]);

    const [sidebarCollapse, setSidebarCollapse] = useState(false);

    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sider trigger={null} collapsible collapsed={!!screens["sm"] ? false : true}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["dashboard"]}
                    onSelect={(e) => {
                        setActiveTab([e.key]);
                        router.push(`/${e.key}`);
                    }}
                    selectedKeys={activeTab}
                    items={[
                        {
                            key: "dashboard",
                            icon: <UserOutlined />,
                            label: "Dashboard",
                        },
                        {
                            key: "user-management",
                            icon: <VideoCameraOutlined />,
                            label: "User Management",
                        },
                        {
                            key: "settings",
                            icon: <UploadOutlined />,
                            label: "Settings",
                        },
                    ]}
                />
            </Sider>
            {children}
        </Layout>
    );
};

export default AppLayout;
