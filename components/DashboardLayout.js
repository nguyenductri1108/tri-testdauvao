import { Typography } from "antd";
import { memo } from "react";
import OptionChart from "./OptionChart";

const DashboardLayout = ({ valueOptionChart }) => {
    return (
        <>
            <Typography.Title>Dashboard</Typography.Title>
            <div
                style={{
                    marginTop: "10px",
                }}
            ></div>
            <OptionChart value={valueOptionChart}></OptionChart>
        </>
    );
};

export default memo(DashboardLayout);
