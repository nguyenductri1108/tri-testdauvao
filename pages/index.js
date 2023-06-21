import Link from "next/link";
import PaddingPage from "../components/PaddingPage";
import { Typography } from "antd";
import AppLayout from "../components/Layout";

export default function Home() {
    return (
        <AppLayout activedTab={null}>
            <Typography.Title>Choose a tab</Typography.Title>
            <Typography.Text>This project can responsive, please try resize window.</Typography.Text>
        </AppLayout>
    );
}
