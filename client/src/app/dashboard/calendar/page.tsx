"use client"

import { ApiesString, ApiHandler } from '@/api/ApiHandler'
import MyEmpty from '@/constant/empty'
import { cardType } from '@/type/card'
import { StringToDate } from '@/utils/StringToDate'
import { CalendarOutlined, CalendarTwoTone, CheckCircleOutlined } from '@ant-design/icons'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

interface Props { }

const Calendar: NextPage<Props> = ({ }) => {

    const [Card, setCard] = useState<Array<cardType> | []>([])


    useEffect(() => {
        ApiHandler("GET", null, ApiesString.UserInstallment_getAll + `?userId=${localStorage.getItem('id')}&cardId=${0}`)!.then((response) => {
            setCard(response.data.data);
        })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, [])

    return <div className='h-[80svh] overflow-y-auto w-full  px-4  justify-center items-start '>
        <div className=' flex items-center gap-3 py-10'>
            <CalendarTwoTone twoToneColor="#f97316" className='text-xl' />
            <h1 className=' text-black text-2xl'>تقویم اقساط</h1>
        </div>
        <div className='grid grid-cols-3 gap-3 py-3 ' >
            {Card.length == 0 ? <MyEmpty /> :
                Card.sort((a, b) => a.date! - b.date!).map((n: cardType) => {

                    if (n.isPayed == 1) {
                        return (
                            <div className=' w-full h-full relative flex flex-col  aspect-square shadow-lg rounded-lg overflow-clip text-xs '>
                                <div className=' absolute bg-green-600 w-full h-full opacity-80 flex justify-center items-center text-white'>
                                    <CheckCircleOutlined className='text-4xl' />
                                </div>
                                <div className=' bg-red-600 w-full h-[5rem] text-white flex justify-center items-center text-center' >
                                    {n.monthName}<br></br>{StringToDate(String(n.date))}
                                </div>

                                <div className='w-full h-full      flex justify-center items-center'>
                                    {n.monthlyPayment} ریال

                                </div>
                            </div>
                        )
                    } else

                        return (
                            <div className=' w-full h-full flex flex-col  aspect-square shadow-lg rounded-lg overflow-clip text-xs '>
                                <div className=' bg-red-600 w-full h-[5rem] text-white flex justify-center items-center text-center' >
                                    {n.monthName}<br></br>{StringToDate(String(n.date))}
                                </div>

                                <div className='w-full h-full      flex justify-center items-center'>
                                    {n.monthlyPayment} ریال

                                </div>
                            </div>
                        )
                })
            }
        </div>

    </div>
}

export default Calendar