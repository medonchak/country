import React, { useState } from 'react';
import {Form, Button, Row, Col, Input, Modal} from 'antd';
import 'antd/dist/antd.css';
import s from './style.module.css'
import ModalEditWindow from './modalEditWindow';
import ModalAddWindow from './modalAddWindow'
import {
    EditOutlined,
    DeleteOutlined
  } from '@ant-design/icons';

const { Search } = Input;



const ElementTable =(props)=>{
    const [form] = Form.useForm();
    const [visible,editvisible]=useState(false)
    let handleCancel =()=>{
        editvisible(false)
    }
    let Edit=()=>{
        editvisible(true)

        form.setFieldsValue(props)
    
    }
    let Delete=()=>{
        props.DeleteUser(props.id)
    }
    return <div className={s.comp}>
                <ModalEditWindow EditUser={props.EditUser} addUser={props.addUser} element={props} form={form} visible={visible} handleCancel={handleCancel}/>
                <Row>
                    <Col className={s.colElement} span={1}>
                        <span className={s.item}>{props.id}</span>
                    </Col>
                    <Col className={s.colElement} span={5}>
                        <span className={s.item}>{props.name}</span>
                    </Col>
                    <Col className={s.colElement} span={5}>
                        <span className={s.item}>{props.email}</span>
                    </Col> 
                    <Col className={s.colElement} span={5}>
                        <span className={s.item}>{props.website}</span>
                    </Col>
                    <Col className={s.colElement} span={5}>
                        <span className={s.item}>{props.company}</span>
                    </Col>
                    <Col className={s.colElement} span={3}>
                        <Button onClick={Edit} icon={<EditOutlined />} className={s.but}>
                            
                        </Button>
                        <Button onClick={Delete} icon={<DeleteOutlined />} className={s.but}>
                           
                        </Button>
                    </Col>
                </Row>        
        </div>
}

const Header = ()=>{
  
    return    <div className={s.Header}>
                    <Row>
                        <Col className={s.colTable} span={1}>
                            №
                        </Col>
                        <Col className={s.colTable} span={5}>
                            Name
                        </Col>
                        <Col className={s.colTable} span={5}>
                            Email
                        </Col> 
                        <Col className={s.colTable} span={5}>
                            Website
                        </Col>
                        <Col className={s.colTable} span={5}>
                            Company
                        </Col>
                        <Col className={s.colTable} span={3}>
                            
                        </Col>
                    </Row> 
                </div>
}

const Content =(props)=>{
    const [visible,editvisible]=useState(false)
    const [visibleSearch,editvisibleSearch]=useState(false)

    let handleCancel =()=>{
        editvisible(false)
    }
    let Add=()=>{
        editvisible(true)
        
    }
    const onSearch = (value) => {
        props.Search(value);
        editvisibleSearch(true)
    }
 
   
    let component =props.users.map(c=> <ElementTable EditUser={props.EditUser} DeleteUser={props.DeleteUser} addUser={props.addUser}  id={c.id} name={c.name} email={c.email} website={c.website} company={c.company.name}/> )
    
    return  (
        <div className={s.component}>
            <ModalAddWindow addUser={props.addUser}  visible={visible} handleCancel={handleCancel}/>
            <Search placeholder="input search text" style={{ width: 200 }} onSearch={onSearch} enterButton />
        
            <Button onClick={Add}  className={s.but}>
                    AddUser
            </Button>
            <Header />
            {!visibleSearch ? component : props.searchUsers.map(c=> <ElementTable EditUser={props.EditUser} DeleteUser={props.DeleteUser} addUser={props.addUser}  id={c.id} name={c.name} email={c.email} website={c.website} company={c.company.name}/> )}

          
        </div>
    )

}



 export default Content;