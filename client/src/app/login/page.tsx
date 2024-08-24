'use client';

import { NextPage } from 'next'
import logo from '../../../assets/logo.png'
import Image from 'next/image'
import { Button, Form, FormProps, Input } from 'antd'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react';
import { Splash } from '@/constant/splash';
interface Props { }

const Login: NextPage<Props> = ({ }) => {
    const router = useRouter()
    const [loading, setloading] = useState<boolean>(true)
    type FieldType = {
        username?: string;
        password?: string;
    };
    type LoginRes = {
        success?: string;
        message?: string;
        data?: any;
    }




    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:8080/api/user/loginUser?mobile=${values.username}&password=${values.password}`,

        };

        axios.request<LoginRes>(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                console.log(response.data.success);

                if (response.data.success == "TRUE") {
                    localStorage.setItem("id", response.data.data.userId)
                    localStorage.setItem("name", response.data.data.name + ' ' + response.data.data.lastName)
                    localStorage.setItem("ntnCode", response.data.data.ntnCode)
                    localStorage.setItem("mobileNumber", response.data.data.mobileNumber)
                    toast(response.data.message, {
                        type: "success",
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,

                    })

                    setTimeout(() => {
                        router.push("/dashboard")
                    }, 2000);

                } else if (response.data.success == "FALSE") {
                    toast(response.data.message, {
                        type: "error",
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,

                    })

                }

            })
            .catch((error) => {
                console.log(error);
            });
    };


    useEffect(()=>{
       setInterval(() => {
        setloading(false)
       }, 3000); 
    },[])



    return (

        loading ? <Splash /> :
            <section className='flex flex-col  justify-center items-center p-8'>
                <ToastContainer theme='light' rtl={true} />
                <div className=' flex gap-3 justify-center items-center mb-6   '>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className='w-[20%] '
                    />
                    <div className='flex flex-col '>
                        <h1 className='kenar text-3xl text-orange-400'>قسطبان</h1>
                        <p className='text-xs tracking-widest'>QESTBAN APPLICATION</p>
                    </div>




                </div>

                <Form
                    name="basic"
                    labelCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    className=' w-full'
                    size='large'


                >
                    <Form.Item<FieldType>

                        label="نام کاربری"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}

                    >
                        <Input variant="filled" placeholder='نام کاربری خود را وارد کنید ... ' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="رمز عبور"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password variant="filled" placeholder='رمز عبور خود را وارد کنید ... ' />
                    </Form.Item>



                    <Form.Item >
                        <Button type="primary" htmlType="submit" className='w-full bg-primary mt-9 '>
                            ورود
                        </Button>
                    </Form.Item>
                    <Form.Item >
                        <Button type="default" onClick={() => {
                            router.push("/signup")
                        }} className='w-full   '>
                            ثبت نام
                        </Button>
                    </Form.Item>
                </Form>
            </section>
    )

}

export default Login