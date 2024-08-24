'use client';

import { NextPage } from 'next'
import logo from '../../../assets/logo.png'
import Image from 'next/image'
import { Button, Form, FormProps, Input } from 'antd'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
interface Props { }

const Signup: NextPage<Props> = ({ }) => {
    const router = useRouter()

    type FieldType = {
        name?: string;
        lastName?: string;
        ntnCode?: string;
        mobileNumber?: string;
        password?: string
    };
    type Response = {
        success?: string;
        message?: string;
        data?: any;
    }





    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: "http://localhost:8080/api/user/addUser",
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*'
            },
            data: values

        };

        axios.request<Response>(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                console.log(response.data.success);

                if (response.data.success == "TRUE") {


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





    return (

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

                    label="نام "
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}

                >
                    <Input variant="filled" placeholder='نام خود را وارد کنید ... ' />
                </Form.Item>
                <Form.Item<FieldType>

                    label="نام خانوادگی"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your username!' }]}

                >
                    <Input variant="filled" placeholder='نام خانوادگی خود را وارد کنید ... ' />
                </Form.Item>
                <Form.Item<FieldType>

                    label="کد ملی"
                    name="ntnCode"
                    rules={[{ required: true, message: 'Please input your username!' }]}

                >
                    <Input variant="filled" placeholder='کد ملی خود را وارد کنید ... ' />
                </Form.Item>
                <Form.Item<FieldType>

                    label="شماره تلفن همراه"
                    name="mobileNumber"
                    rules={[{ required: true, message: 'Please input your username!' }]}

                >
                    <Input variant="filled" placeholder='شماره تلفن همراه خود را وارد کنید ... ' />
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
                        ثبت نام
                    </Button>
                </Form.Item>
                <Form.Item >
                    <Button type="default" onClick={() => {
                        router.push("/login")
                    }} className='w-full   '>
                        ورود به حساب کاربری
                    </Button>
                </Form.Item>
            </Form>
        </section>
    )

}

export default Signup