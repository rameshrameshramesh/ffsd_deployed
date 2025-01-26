import React from 'react';
import {Alert,Spin,Button, Card,Flex, Form,Input, Typography} from 'antd';
import { Link } from 'react-router-dom';
import joblogin from '../assets/joblogin.jpeg';
import useLogin from '../hooks/useLogin'


const Login = () => {
    const {error,loading,loginUser} = useLogin()
    const handleLogin = async (values) => {
        await loginUser(values);
    }
  return (
    <Card className='form-container'>
    <Flex gap = 'large'>
    <Flex flex = {1}>
            <img src = {joblogin} className='auth-image'/>
    </Flex>
        <Flex vertical flex = {1}>
            <Typography.Title level = {3} strong className='title'>
                Login In
            </Typography.Title>
            <Typography.Text type = "secondary" strong className='slogan'>
                Unlock new job openings!
            </Typography.Text>
            <Form layout = 'vertical' onFinish = {handleLogin} autoComplete = 'off'>
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
                {error && <Alert description = {error} type = "error" showIcon closable className = "alert" />}
                <Form.Item>
                    <Button 
                      type = {`${loading ? '':"primary"}`} 
                      htmlType='submit'
                      size='large'
                      className='btn'>
                        
                        {loading ? <Spin /> :"Log In"}
                     </Button>
                </Form.Item>
                <Form.Item>
                    <Link to = '/'>
                    <Button  size = "large" className='btn'>Create an Account</Button>
                    </Link>                    
                </Form.Item>
            </Form>
        </Flex>
        
    </Flex>
  </Card>
  )
}
export default Login;
