import Lottie from "lottie-react";
import Preloader1 from './assets/33744-loading-dots-white.json'
import Preloader2 from './assets/dots.blue.json'
type preloaderProps = {
    size?: number,
    type?: string
}

export default function Preloader({ size, type }: preloaderProps) {
    var s = size == undefined ? 30 : size
    return (

        <div className=' flex justify-center items-center' style={{ width: s, height: s }}>
            <Lottie animationData={type ? Preloader2 : Preloader1} loop={true} />

        </div>
    )
}
