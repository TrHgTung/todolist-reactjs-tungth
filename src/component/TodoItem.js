import React, { useState } from "react";
import { Col, Popconfirm, Modal, Form, Input, Button, DatePicker } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined, FileDoneOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import moment from "moment";
import { updateTodo, deleteTodo } from "./../actions/action";
import toast from "./../helpers/toast";

function TodoItem(props) {
  const dispatch = useDispatch();
  const { todo } = props;
  const [isPopVisible, setIsPopVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showPopconfirm = () => {
    setIsPopVisible(true);
  };

  const handlePopOk = () => {
    setConfirmLoading(true);
    dispatch(deleteTodo(todo.id));
    setConfirmLoading(false);
    setIsPopVisible(false);
    toast.success("Thêm thành công", "Xóa thành công");
  };

  const handlePopCancel = () => {
    setIsPopVisible(false);
  };

  const onFinish = (values) => {
    const data = {
      ...todo,
      name: values.name,
      time: moment(values.time).format("DD-MM-YYYY").toString(),
    };

    dispatch(updateTodo(data));
    setIsModalVisible(false);
    toast.success("Thành công", "Cập nhập thành công");
  };

  const onFinishTodo = () => {
    const data = {
      ...todo,
      complete: true,
    };

    dispatch(updateTodo(data));
    setIsModalVisible(false);
    toast.success("Thành công", "Đã hoàn thành");
  };

  return (
    <Col xs={2} sm={4} md={6} lg={6} xl={6}>
      <div className="todo-item">
        <div className="item-star">
          <div className="item-status">
            {todo.complete ? (
              <CheckOutlined style={{ fontSize: "35px", color: "#4BB543" }} />
            ) : (
              <CloseOutlined style={{ fontSize: "35px", color: "#FC100D" }} />
            )}
          </div>
        </div>
        <div className="item-body">
          <h3 className="todo-name">{todo.name}</h3>
          <p className="todo-time">{todo.time}</p>
          <p className="todo-status">
            {todo.complete ? "Đã xong" : "Quá hạn"}
          </p>
        </div>
        <div className="item-end">
          {!todo.complete && (
            <div className="item-icon" onClick={onFinishTodo}>
              <FileDoneOutlined
                style={{ fontSize: "20px", color: "green" }}
              />
            </div>
          )}
          <div className="item-icon" onClick={showModal}>
            <EditOutlined style={{ fontSize: "20px", color: "blue" }} />
          </div>
          <div className="item-icon">
            <Popconfirm
              title="Bạn có muốn xóa CV này không?"
              visible={isPopVisible}
              onConfirm={handlePopOk}
              okButtonProps={{ loading: confirmLoading }}
              onCancel={handlePopCancel}
              okText="Có"
              cancelText="Không"
            >
              <DeleteOutlined
                style={{ fontSize: "20px", color: "red" }}
                onClick={showPopconfirm}
              />
            </Popconfirm>
          </div>
        </div>
      </div>
      <Modal
        title="Chỉnh sửa công việc"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ name: todo.name }}
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
                message: "Bạn phải thêm thời gian!",
              },
            ]}
          >
            <DatePicker placeholder="Đã quá hạn" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sửa CV
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Col>
  );
}
export default TodoItem;
