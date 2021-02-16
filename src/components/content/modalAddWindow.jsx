import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input } from 'antd';

const FormElement =(props)=>{

    let onFinish=(values)=>{
        props.addUser(values)
        props.onCancel()
        }

    return  <div>
                <Form onFinish={onFinish}>
                        <Form.Item   name="name" label="Name" rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}>
                           
                            <Input   />
                        
                        </Form.Item>
                        <Form.Item  name="email" label="Email" rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        ]}>
                           
                            <Input  />
                        
                        </Form.Item>
                        <Form.Item  name="website" label="Website" rules={[
                        {
                            required: true,
                            message: 'Please input your Website!',
                        },
                        ]}>
                           
                            <Input  />
                        
                        </Form.Item>
                        <Form.Item  name="company" label="Company" rules={[
                        {
                            required: true,
                            message: 'Please input your Company!',
                        },
                        ]}>
                            
                            <Input  />
                       
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" >Submit</Button>
                        </Form.Item>
                </Form>
            </div>
}


const ModalAddWindow = (props) => {
    return (
        <>
            <Modal title="AddUser" visible={props.visible} onCancel={props.handleCancel}  footer={[]} > 
                    <FormElement onCancel={props.handleCancel}   addUser={props.addUser}  />     
            </Modal>
        </>
    );
};

export default ModalAddWindow;