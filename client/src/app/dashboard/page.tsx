'use client';

import { NextPage } from 'next'
import men from '../../../assets/men.png'
import Image from 'next/image'
import { Button, Checkbox, Form, FormProps, Input } from 'antd'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { CalculatorTwoTone, CalendarTwoTone, CreditCardTwoTone, HomeOutlined, LeftCircleTwoTone, MessageTwoTone, PlusCircleTwoTone, SearchOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Children, Suspense, useContext, useEffect, useState } from 'react';
import { ActionType, AppContext } from '@/context/state';
import { ApiesString, ApiHandler } from '@/api/ApiHandler';
import MyEmpty from '@/constant/empty';
interface Props { }
interface card {
    id?: number
    cardNumber?: string
    isInstallment?: bigint
    bankName?: string
}


const Dashboard: NextPage<Props> = ({ }) => {
    const { state, dispatch } = useContext(AppContext);


    const [Card, setCard] = useState<Array<card> | null>()
    const router = useRouter()
    type LoginRes = {
        success?: string;
        message?: string;
        data?: any;
    }



    useEffect(() => {

        ApiHandler("GET", null, ApiesString.Card_getCard + `?userId=${localStorage.getItem('id')}`)!.then((response) => {
            setCard(response.data.data);
        })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });

    }, [])


    return (

        <div className='flex flex-col   items-center relative px-5 '>
            <Image
                src={men}
                alt="Picture of the author"
                className=' w-full m-5  rounded-2xl '
            />

            <div className='grid grid-cols-2  min-[320px]:grid-cols-4 gap-2 w-full mb-4'>

                <div className='w-full rounded-2xl h-full flex flex-col justify-center items-center aspect-square  gap-1 bg-white shadow-2xl text-xs  text-gray-600' onClick={() => {
                    router.push("/dashboard/addCard")
                }}>
                    <PlusCircleTwoTone twoToneColor="#f97316" className='text-3xl' />
                    <h1 className=''>افزودن کارت</h1>
                </div>
                <div className='w-full rounded-2xl h-full flex flex-col justify-center items-center aspect-square  gap-1 bg-white shadow-2xl text-xs  text-gray-600' onClick={() => {
                    router.push("/dashboard/calendar")
                }}>
                    <CalendarTwoTone twoToneColor="#f97316" className='text-3xl' />
                    <h1>تقویم اقساط</h1>
                </div>
                <div className='w-full rounded-2xl h-full flex flex-col justify-center items-center aspect-square  gap-1 bg-white shadow-2xl text-xs  text-gray-600'>
                    <CalculatorTwoTone twoToneColor="#f97316" className='text-3xl' />
                    <h1>محاسبه قسط</h1>
                </div>
                <div className='w-full rounded-2xl h-full flex flex-col justify-center items-center aspect-square  gap-1 bg-white shadow-2xl text-xs  text-gray-600' onClick={() => {
                    router.push("/dashboard/message")
                }}>
                    <MessageTwoTone twoToneColor="#f97316" className='text-3xl' />
                    <h1>اعلانات</h1>
                </div>



            </div>
            <div className=' flex w-full items-center justify-between'>
                <div className=' flex gap-2 items-center'>
                    <CreditCardTwoTone twoToneColor="#f97316" />
                    <h1 className=' text-lg'>لیست کارت ها </h1>
                </div>
                <h1 className=' text-xs text-gray-500'> مشاهده همه <span>{'>'}</span></h1>
            </div>
            <div className='border-b w-full mt-3 mb-3'></div>
            <div className='flex justify-start items-center flex-col h-[30svh] w-full px-2 overflow-auto scroll-smooth '>

                {
                    Card?.length == 0 ? <MyEmpty /> :  Card?.map(item => (

                        <div className='w-full  mb-4 flex justify-between items-center bg-white border rounded-2xl py-5 px-5' key={item.cardNumber} onClick={() => {
                            router.push(`/dashboard/Installment/${item.id}`)
                            dispatch({ type: ActionType.SET_CARD_DATA, payload: item })
                        }}>
                            <div>
                                <h1>شماره کارت : {item.cardNumber}</h1>
                                <h1 className='text-primary text-sm'>{item.bankName}</h1>
                            </div>
                            <LeftCircleTwoTone twoToneColor="#f97316" className=' text-2xl' />

                        </div>


                    ))
}



            </div>


        </div>
    )

}

export default Dashboard