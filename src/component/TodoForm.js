import React, { useEffect } from "react";
import { Row, Col, Form, Input, Button, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { addTodo } from "../actions/action";
import toast from "../helpers/toast";

function TodoForm(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thêm công việc";
  }, []);

  const onFinish = (values) => {
    const data = {
      id: uuidv4(),
      name: values.name,
      time: moment(values.time).format("DD/MM/YYYY").toString(),
      complete: false,
    };

    dispatch(addTodo(data));
    toast.success("Thành công", "Thêm công việc thành công");
  };

  return (
    <>
      <Row>
        <h2 className="title-Form">Thêm mới công việc</h2>
      </Row>
      <Row>
        <Col span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{}}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Tên công việc ko được bỏ trống!",
                },
              ]}
            >
              <Input placeholder="Tên công việc" />
            </Form.Item>

            <Form.Item
              name="time"
              rules={[
                {
                  required: true,
                  message: "Bạn phải thêm thời gian",
                },
              ]}
            >
              <DatePicker placeholder="TG Deadline" format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Thêm mới
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default TodoForm;
