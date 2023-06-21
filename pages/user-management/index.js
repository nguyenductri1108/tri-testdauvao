import { Button, Input, Modal, Table, Typography } from "antd";
import AppLayout from "../../components/Layout";
import { EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

const UserManagement = ({ posts }) => {
    const [dataFit, setDataFit] = useState(posts);
    const [dataModal, setDataModal] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const filterData = (e) => {
        const input = e.target.value;
        const fitData = posts.filter((item) => item.userId.toString().includes(input) || item.title.includes(input));
        console.log(fitData);
        setDataFit(fitData);
    };

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: 200,
        },
        {
            title: "User ID",
            dataIndex: "userId",
            key: "userId",
            width: 200,
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            width: 2000,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button
                    type="primary"
                    shape="circle"
                    icon={<EyeOutlined />}
                    onClick={() => {
                        setModalOpen(true);
                        setDataModal(record);
                    }}
                />
            ),
            width: 200,
        },
    ];

    return (
        <AppLayout activedTab={"user-management"}>
            <Typography.Title>User Management</Typography.Title>
            <div style={{ display: "flex", flexWrap: "wrap", columnGap: "16px" }}>
                <Typography.Text>Search by User Id or Title: </Typography.Text>
                <Input
                    allowClear
                    onChange={filterData}
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                    }}
                ></Input>
            </div>

            <div
                style={{
                    marginTop: "10px",
                }}
            ></div>

            <Table style={{ maxWidth: "100%" }} columns={columns} dataSource={dataFit} />

            <Modal
                title={`Title : ${dataModal?.title}`}
                open={modalOpen}
                onCancel={() => {
                    setModalOpen(false);
                }}
                footer={null}
            >
                <Typography style={{ fontWeight: "bold" }}>User Id:{dataModal.userId}</Typography>
                <Typography.Paragraph>{dataModal.body}</Typography.Paragraph>
            </Modal>
        </AppLayout>
    );
};

export default UserManagement;

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(res);

    return {
        props: {
            posts: data,
        },
    };
}
