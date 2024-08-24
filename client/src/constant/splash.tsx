"use client"

import Image from 'next/image'
import logo from '../../assets/logo.png'
import { Loading3QuartersOutlined, LoadingOutlined } from '@ant-design/icons'


export const Splash = () => {


    return (
        <div className="flex w-full flex-col  justify-center items-center min-h-screen bg-white">

            <Image src={logo} alt='logo' width={100} />
            <br />
            <h1 className='kenar text-3xl text-orange-400  '>قسطبان</h1>
            <p className='text-xs tracking-widest'>QESTBAN APPLICATION</p>

        </div>
    )
}