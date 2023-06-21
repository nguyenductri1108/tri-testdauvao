import DashboardLayout from "../../components/DashboardLayout";
import AppLayout from "../../components/Layout";

const Dashboard = () => {
    return (
        <AppLayout activedTab={"dashboard"}>
            <DashboardLayout valueOptionChart={undefined}></DashboardLayout>
        </AppLayout>
    );
};

export default Dashboard;
