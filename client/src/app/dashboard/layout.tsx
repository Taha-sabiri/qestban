'use client';

import { useRouter, usePathname } from 'next/navigation';

import type { Metadata } from "next";
import { HomeOutlined, SearchOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import logo from '../../../assets/logo.png'
import { Suspense, useEffect, useState } from 'react';






export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [path, setpath] = useState<string | null>('')
    const router = useRouter()
    const routerNext = useRouter()
    const pathNext = usePathname()




    return (

        <section className='flex flex-col    items-center relative '>

            <div className="flex justify-center items-center w-full mt-[7svh] ">

                {children}

            </div>
            <div className=' w-full h-[9.5svh]  flex flex-col items-center justify-center p-4 absolute bottom-0 bg-white  border-t  '>
                <div className='flex items-center justify-center w-full  gap-10 px-5 '>
                    <div className={` flex justify-center items-center ${pathNext == '/dashboard' ? 'bg-primary text-white  px-5 py-3 gap-2' : '!text-gray-600'}  rounded-full`} onClick={() => {
                        router.push('/dashboard')
                    }}>
                        <HomeOutlined className=' text-2xl   rounded-full ' />
                        {pathNext == '/dashboard' ? <h1 className=" text-sm">خانه</h1> : ''}
                    </div>

                
                 
                    <div className={` flex justify-center items-center ${pathNext == '/dashboard/profile' ? 'bg-primary text-white  px-5 py-3 gap-2' : '!text-gray-600'}  rounded-full`} onClick={() => {
                        router.push('/dashboard/profile')
                    }}>
                        <UserOutlined className=' text-2xl   rounded-full ' />
                        {pathNext == '/dashboard/profile' ? <h1 className=" text-sm">پروفایل</h1> : ''}
                    </div>
                 
                </div>
            </div>
            <div className=' w-full h-[8svh] border-b border flex items-center p-4 absolute top-0 right-0 left-0 bg-white'>
                <div className='flex items-center  gap-2'>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        className='max-w-[2.5svw] min-w-7  '
                    />
                    <h1 className='kenar text-2xl text-orange-400'>قسطبان</h1>
                </div>
            </div>

        </section>

    );
}
