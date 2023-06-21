import DashboardLayout from "../../components/DashboardLayout";

import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import AppLayout from "../../components/Layout";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Subcription Line Chart",
        },
    },
};

const labels = ["15/6", "16/6", "17/6", "18/6", "19/6", "20/6", "21/6"];

export const data = {
    labels,
    datasets: [
        {
            label: "Subsription amount",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

const SubcriptionChart = () => {
    return (
        <AppLayout activedTab={"dashboard"}>
            <DashboardLayout valueOptionChart={"subcription"}></DashboardLayout>
            <Line options={options} data={data} style={{ width: "100%", maxWidth: "100%" }} />
        </AppLayout>
    );
};

export default SubcriptionChart;
