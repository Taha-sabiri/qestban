import { message } from "antd";
import axios from "axios";

interface ApiResponse {
    data: any;
    success: "TRUE" | "FALSE";
    message: string;
}

const api = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        'Content-Type': 'application/json'
    },
});

export async function ApiHandler(method: "GET" | "POST", payload: any, url: string) {
    try {
        const response = await api.request<ApiResponse>({
            url,
            method,
            data: payload,
        });


        if (response.data.success === "TRUE") {



        } else {

        }
        return {
            data: response.data,
            message: response.data.message,
            success: response.data.success,
        };
    } catch (error: any) {
        return {
            data: error.response?.data || null,
            message: false,
            success: error.message || 'An error occurred',
        };


    }

}

export class ApiesString {
    static UserInstallment_getAll: string = "userInstallment/getAll"
    static UserInstallment_updateIsPayed: string = "userInstallment/updateIsPayed"
    static Card_getCard: string = "card/getCard"
    static Card_addCard: string = "card/addCard"
    static Message_getAll: string = "message/getAll"
}



// export enum PaymentType {
//     Cash = "نقدی",
//     Credit = "نسیه",
//     CashAndCredit = "نقدی/نسیه",
// }
// export const PaymentTypeDetails = {
//     getTitle(paymentType: PaymentType): string {
//         switch (paymentType) {
//             case PaymentType.Cash:
//                 return "نقدی";
//             case PaymentType.Credit:
//                 return "نسیه";
//             case PaymentType.CashAndCredit:
//                 return "نقدی/نسیه";
//             default:
//                 return "";
//         }
//     },

//     getId(paymentType: PaymentType): number {
//         switch (paymentType) {
//             case PaymentType.Cash:
//                 return 1;
//             case PaymentType.Credit:
//                 return 2;
//             case PaymentType.CashAndCredit:
//                 return 3;
//             default:
//                 return 0;
//         }
//     }
// };
// export function getInvoiceTypeFromID(id: number): PaymentType {
//     switch (id) {
//         case 1:
//             return PaymentType.Cash;
//         case 2:
//             return PaymentType.Credit;
//         case 3:
//             return PaymentType.CashAndCredit;
//         default:
//             return PaymentType.CashAndCredit;
//     }
// }

