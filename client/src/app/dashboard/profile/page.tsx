"use client"
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Divider } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import React from 'react'
interface Props { }


const Profile: NextPage<Props> = ({ }) => {
  const router = useRouter()
  return (
    <div className='  py-9 flex flex-col items-center w-[90svw] '>
      <Avatar icon={<UserOutlined />} size={120} />
      <h1 className='  text-2xl mt-2'>{localStorage.getItem('name')}</h1>
      <h1 className=' text-primary mt-1'>{localStorage.getItem('mobileNumber')}</h1>

      <div className='flex w-full flex-col self-start mt-10'>
        <div className='flex w-full gap-3' onClick={() => {
          localStorage.clear()
          router.push(`/login`)
        }}>
          <LogoutOutlined className='text-red-600' />
          <h1>خروج از حساب کاربری</h1>
        </div>
        <Divider />

      </div>
    </div>
  )
}

export default Profile