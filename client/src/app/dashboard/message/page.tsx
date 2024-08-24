"use client"

import { ApiesString, ApiHandler } from '@/api/ApiHandler'
import MyEmpty from '@/constant/empty'
import { messageType } from '@/type/message'
import { CaretRightOutlined, MessageOutlined, MessageTwoTone } from '@ant-design/icons'
import { Collapse, CollapseProps, Divider, Empty, message } from 'antd'
import { NextPage } from 'next'
import { CSSProperties, useEffect, useState } from 'react'



interface Props { }

const Message: NextPage<Props> = ({ }) => {

    const [Message, setMessage] = useState<Array<messageType> | null>([])



    useEffect(() => {

        ApiHandler("GET", null, ApiesString.Message_getAll + `?userId=${localStorage.getItem('id')}`)!.then((response) => {
            setMessage(response.data.data);
        })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });

    }, [])



    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => {
        return Message?.map((item: messageType, index: number) => {
            return {
                key: index,
                label: item.title,
                children: (
                    <div>
                        <Divider className='-mt-0' />
                        <p>{item.message}</p>
                    </div>
                ),
                style: panelStyle,
            };
        });
    };

    const panelStyle: React.CSSProperties = {
        marginBottom: 12,
        background: "#F1F1F1",
        borderRadius: 5,
        border: 'none',
    };


    return <div className='h-[80svh] overflow-y-auto w-full  px-4 justify-center items-start '>
        <div className=' flex items-center gap-3 py-10'>
            <MessageTwoTone twoToneColor="#f97316" className='text-xl' />
            <h1 className=' text-black text-2xl'>اعلانات</h1>
        </div>
        {
            Message?.length == 0 ? <MyEmpty/> : <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{ background: "#ffff" }}
                items={getItems(panelStyle)}
            />
        }


    </div>
}

export default Message