import DashboardLayout from "../../components/DashboardLayout";
import AppLayout from "../../components/Layout";

import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

const labels = ["15/6", "16/6", "17/6", "18/6", "19/6", "20/6", "21/6"];

export const data = {
    labels,
    datasets: [
        {
            label: "Revenue",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: "rgba(22, 119, 255, 0.75)",
        },
    ],
};

const RevenueChart = () => {
    return (
        <AppLayout activedTab={"dashboard"}>
            <DashboardLayout valueOptionChart={"revenue"}></DashboardLayout>
            <Bar options={options} data={data} style={{ width: "100%", maxWidth: "100%" }} />
        </AppLayout>
    );
};

export default RevenueChart;
