import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input } from 'antd';

const FormElement =(props)=>{

    let onFinish=(data)=>{
        props.EditUser(data)
        props.onCancel()
    }
   
    
    return  <div>
                <Form  form={props.form} onFinish={onFinish} >
                        <Form.Item  name="id" label="Number"  >
                            <Input disabled={"false"}  />
                        </Form.Item>
                        <Form.Item name="name" label="Name" rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                        ]}>
                            <Input  />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        ]}>
                            <Input  />
                        </Form.Item>
                        <Form.Item name="website" label="Website" rules={[
                        {
                            required: true,
                            message: 'Please input your Website!',
                        },
                        ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="company" label="Company" rules={[
                        {
                            required: true,
                            message: 'Please input your Company!',
                        },
                        ]}>
                            <Input  />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">Save</Button>
                        </Form.Item>
                </Form>
            </div>
}


const ModalEditWindow = (props) => {
    return (
        <>
            <Modal title="EditUser" visible={props.visible} onCancel={props.handleCancel}  footer={[]} > 
                    <FormElement EditUser={props.EditUser} onCancel={props.handleCancel}  form={props.form}/>     
            </Modal>
        </>
    );
};

export default ModalEditWindow;