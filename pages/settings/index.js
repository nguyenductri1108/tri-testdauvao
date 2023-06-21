import { Button, Form, Input, Typography } from "antd";
import AppLayout from "../../components/Layout";

import { ColorPicker, DatePicker } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/slices/settingsSlice";

const { RangePicker } = DatePicker;

const validColorHex = new RegExp("^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$");

const Settings = () => {
    const data = useSelector((state) => ({
        title: state.settings.title,
        email: state.settings.email,
        color: state.settings.color,
        activeDate: state.settings.activeDate,
    }));

    const { color } = data;

    const [colorInput, setColorInput] = useState(color);

    const dispatch = useDispatch();

    const handleColorInput = (string) => {
        let stringTest = "";

        if (string.startsWith("#")) {
            stringTest = string;
        } else {
            stringTest = "#" + string;
        }

        console.log(validColorHex.test(stringTest.slice(0, 7)), stringTest.slice(0, 7));

        if (validColorHex.test(stringTest.slice(0, 7))) {
            if (validColorHex.test(stringTest.slice(0, 9))) {
                setColorInput(stringTest.slice(0, 9).toUpperCase());
                return;
            }
            setColorInput(stringTest.slice(0, 7).toUpperCase());

            return;
        } else {
            setColorInput("#000000");
            return;
        }
    };

    return (
        <AppLayout activedTab={"settings"}>
            <Typography.Title>Settings</Typography.Title>
            <div
                style={{
                    marginTop: "10px",
                }}
            ></div>

            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={data}
                    onFinish={(e) => {
                        dispatch(setData({ ...e, color: colorInput }));
                        console.log(e);
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Title cannot be empty",
                            },
                        ]}
                    >
                        <Input size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email", message: "The input is not valid E-mail!" }]}
                    >
                        <Input size="large" />
                    </Form.Item>

                    <Form.Item label="Background Color">
                        <Input
                            value={colorInput}
                            onChange={(e) => {
                                setColorInput(e.target.value);
                            }}
                            onPressEnter={(e) => {
                                e.preventDefault();
                                console.log(e.target.value);
                                handleColorInput(e.target.value);
                            }}
                            suffix={
                                <ColorPicker
                                    value={colorInput}
                                    onChange={(e) => {
                                        // console.log(e);
                                        setColorInput(e.toHexString());
                                    }}
                                />
                            }
                        />
                    </Form.Item>

                    <Form.Item name="activeDate" label="Active Date">
                        <RangePicker size="large"></RangePicker>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </AppLayout>
    );
};

export default Settings;
