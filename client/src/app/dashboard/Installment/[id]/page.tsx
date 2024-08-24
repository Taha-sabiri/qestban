"use client"

import { ApiesString, ApiHandler } from '@/api/ApiHandler';
import { AppContext } from '@/context/state';
import { StringToDate } from '@/utils/StringToDate';
import { FundTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import { Checkbox, Tag } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'


type response = {
  success?: string;
  message?: string;
  data?: any;
}
interface card {
  id?: number
  userId?: number
  cardId?: number
  monthlyPayment?: number
  monthName?: String
  isPayed?: number
  date?: number
}

export default function Installment({
  params: { id },
}: {
  params: { id: string };
}) {
  const [Card, setCard] = useState<response | null>()
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    ApiHandler("GET", null, ApiesString.UserInstallment_getAll + `?userId=${localStorage.getItem('id')}&cardId=${id}`)!.then((response) => {
      setCard(response.data);
    })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [])




  return (
    <div className='h-[80svh] overflow-y-auto w-full  px-4 justify-center items-start '>
      <div className=' flex items-center gap-3 py-10'>
        <FundTwoTone twoToneColor="#f97316" className='text-xl' />
        <h1 className=' text-black text-2xl'>لیست اقساط</h1>
      </div>
      
      {Card?.data?.map((item: card) => (
        <div className='w-full h-[100px] mb-4 flex justify-between items-center bg-white border rounded-2xl py-5 px-5' key={item.id} >
          <div>
            <h1>تاریخ قسط : {StringToDate(String(item.date))}</h1>
            <h1 className='text-primary text-sm'>{item.monthlyPayment} تومان</h1>
          </div>

          <Checkbox className='scale-125' title='پرداخت' defaultChecked={item.isPayed === 0 ? false : true} onClick={() => {
            ApiHandler("GET", null, ApiesString.UserInstallment_updateIsPayed + `?id=${item.id}&cardId=${item.cardId}&userId=${item.userId}`)!.then((response) => {
            
            })
              .catch((error) => {
                console.log("Error fetching data:", error);
              });
          }} />

        </div>
      ))}

    </div>
  )
}
