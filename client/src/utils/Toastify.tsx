import { toast } from "react-toastify";

import React from 'react'

type Props = {
    message: string
}

const Toastify = (props: Props) => {
    toast(props.message, {
        type: "success",
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

    })
    return (
        <div>Toastify</div>
    )
}