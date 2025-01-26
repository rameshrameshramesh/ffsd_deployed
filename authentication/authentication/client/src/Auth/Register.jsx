import React from 'react';
import {Alert,Spin,Button, Card,Flex, Form,Input, Typography} from 'antd';
import { Link } from 'react-router-dom';
import registerjob from '../assets/registerjob.jpeg'
import useSignup from '../hooks/useSignup';

const Register = () => {
    const {loading,error,registerUser} = useSignup();
    const handleRegister = (values) => {
        registerUser(values);        
    };
  return (
  <Card className='form-container'>
    <Flex gap = 'large'>
        <Flex vertical flex = {1}>
            <Typography.Title level = {3} strong className='title'>
                Let's Explore the Job Oppurtunities
            </Typography.Title>
            <Typography.Text type = "secondary" strong className='slogan'>
                Join for exclusive access!
            </Typography.Text>
            <Form layout = 'vertical' onFinish = {handleRegister} autoComplete = 'off'>
                <Form.Item label = "Full Name" name = "name" rules = {[
                    {
                        required:true,
                        message:'please input your full name!',
                    },
                ]}
                >
                    <Input size="large" placeholder='Enter your full name' />
                </Form.Item>
                <Form.Item label = "Email" name = "email" rules = {[
                    {
                        required:true,
                        message:'please input your Email!',
                    },
                    {
                        type:'email',
                        message:'the input is not valid email!',
                    }
                ]}
                >
                    <Input size="large" placeholder='Enter your email' />
                </Form.Item>
                <Form.Item label = "Password" name = "password" rules = {[
                    {
                        required:true,
                        message:'please input your Password!',
                    },
                ]}
                >
                    <Input.Password size = "large" placeholder='Enter your password' />
                </Form.Item>
                <Form.Item label = "Confirm Password" name = "confirm_password" rules = {[
                    {
                        required:true,
                        message:'please input your Confirm Password!',
                    },
                ]}
                >
                    <Input.Password size = "large" placeholder='Re-Enter your password' />
                </Form.Item>
                { error && <Alert description = {error} type = "error" showIcon closable className = "alert" />}
                <Form.Item>
                    <Button 
                      type = {`${loading ? '':"primary"}`} 
                      htmlType='submit'
                      size='large'
                      className='btn'>
                        
                        {loading ? <Spin /> :"create Account"}
                     </Button>
                </Form.Item>
                <Form.Item>
                    <Link to = '/login'>
                    <Button  size = "large" className='btn'>Sign In</Button>
                    </Link>                    
                </Form.Item>
            </Form>
        </Flex>
        <Flex flex = {1}>
            <img src = {registerjob} className='auth-image'/>
        </Flex>
    </Flex>
  </Card>
  ) 
     
}
export default Register;