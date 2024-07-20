import { ButtonHTMLAttributes } from "react"
import Preloader from "../preloader"

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    label: string;
    pay?: boolean
}

export function Buttonsimple(props: buttonProps) {
    return <button type="button" {...props} disabled={props.loading} className={`text-zinc-900 bg-white border border-zinc-300 focus:outline-none hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 font-medium rounded-lg text-sm px-5 py-2.5 `}>
        {props.loading == true ? <Preloader size={24} /> : props.label}
    </button>

}

export default function Button(props: buttonProps) {


    return (
        <button disabled={props.loading} type="submit" className={` flex justify-center items-center w-full text-white ${props.loading == true ? " bg-zinc-950" : "bg-zinc-900 hover:bg-zinc-950 "}  font-medium rounded-lg text-sm px-5 py-1.5 text-center`} {...props}>{props.loading == true ? <Preloader size={24} /> : props.label}
        </button>
    )
}


export function ButtonPay(props: buttonProps) {


    return (
        <button {...props} disabled={props.loading} type="submit" className={` flex justify-center items-center w-full text-white ${props.loading == true || props.pay == true ? " bg-zinc-950" : "bg-zinc-900 hover:bg-zinc-950 "}  font-medium rounded-lg text-sm px-5 py-1.5 text-center${props.className}`}>{props.loading == true ? <Preloader size={24} /> : props.label}
        </button>
    )
}
