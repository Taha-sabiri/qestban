"use client"

import { PlusCircleTwoTone, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { bankNames } from '@/constant/constItem';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css';
import { ApiesString, ApiHandler } from '@/api/ApiHandler';

type FieldType = {
    cardNumber?: string;
    isInstallment?: string;
    bankName?: string;
    startDate?: string;
    amount?: string;
    percentage?: string;
    count?: string;
    perInstallment?: string;
}
type Res = {
    success?: string;
    message?: string;
    data?: any;
}


export default function AddCard() {
    const router = useRouter()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {


        let data = JSON.stringify({
            "userId": localStorage.getItem("id"),
            "cardNumber": values.cardNumber,
            "isInstallment": 1,
            "bankName": values.bankName,
            "startDate": values.startDate,
            "amount": values.amount,
            "percentage": values.percentage,
            "count": values.count,
            "perInstallment": values.perInstallment
        });

        ApiHandler("POST", data, ApiesString.Card_addCard + `?userId=${localStorage.getItem('id')}`)!.then((response) => {

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
                console.log("Error fetching data:", error);
            });

    };



    return (
        <div className='flex flex-col  items-start w-full relative px-5 mt-10 '>
            <ToastContainer theme='light' rtl={true} />
            <div className=' flex gap-3'>
                <PlusCircleTwoTone twoToneColor="#f97316" className='text-xl' />
                <h1 className=' text-black text-xl'>افزودن کارت</h1>

            </div>
            <p className='font-light mt-2'>
                لطفا اطلاعات مورد نیاز را پرکنید و سپس دکمه افزودن را کلیک کنید
            </p>

            <Form
                name="basic"
                labelCol={{ span: 24 }}
                size='large'
                className=' w-full mt-5 gap-2 grid grid-cols-2'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="شماره کارت"
                    name="cardNumber"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input variant='filled'  />
                </Form.Item>
                <Form.Item<FieldType>
                    label="نام بانک"
                    name="bankName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Select
                        variant='filled'

                        showSearch
                        options={bankNames.map(n => ({
                            label: n,
                            value: n
                        }))}
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label="تاریخ شروع"
                    name="startDate"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input variant='filled' />

                </Form.Item>

                <Form.Item<FieldType>
                    label="مبلغ وام"
                    name="amount"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input variant='filled' />

                </Form.Item>
                <Form.Item<FieldType>
                    label="درصد سود سالیانه"
                    name="percentage"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input variant='filled' />

                </Form.Item>
                <Form.Item<FieldType>
                    label="تعداد اقساط"
                    name="count"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input variant='filled' />

                </Form.Item>
                <Form.Item<FieldType>
                    label="فاصله بین اقساط"
                    name="perInstallment"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input variant='filled' />

                </Form.Item>




                <Form.Item className='w-full col-span-2' >
                    <Button type="primary" htmlType="submit" className='w-full' icon={<PlusOutlined />}>
                        افزودن
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
