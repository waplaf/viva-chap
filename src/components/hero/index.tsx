import Link from "next/link";



export default function Hero() {
    return (
        <>
            <section id="booking" data-aos="zoom-in" className="bg-[red] text-white">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">
                            Contribua com Nossa Campanha
                        </h1>
                        <div style={{ borderWidth: 3 }} className=" border-[#fcc309] w-64 rounded-r-full mb-5" />
                        <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                            Cada centavo que você doa faz uma grande diferença e ajuda a garantir nossa vitória nas eleições presidenciais de 9 de outubro de 2024. Ajude-nos a construir um futuro melhor!

                        </p>
                        <Link href="/pda" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">

                            Book Now




                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="/pda" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-200 border bg-green-600 border-green-300 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-gray-100">
                            Speak to Sales
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">


                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-96 w-96" data-name="Layer 1" viewBox="0 0 505.46625 596.94537" ><path d="M706.73312,652.47268l5,96S500.239,547.178,473.89063,488.28153,497.13921,283.694,497.13921,283.694l110.04332,60.44633Z" transform="translate(-347.26688 -151.52732)" fill="#9f616a" /><path d="M382.44618,243.39641l-32.548,3.09981s-17.049,37.19774,35.64783,40.29756Z" transform="translate(-347.26688 -151.52732)" fill="#9f616a" /><path d="M382.44618,300.74293l-32.548,3.09981s-17.049,37.19774,35.64783,40.29755Z" transform="translate(-347.26688 -151.52732)" fill="#9f616a" /><path d="M382.44618,362.73916l-32.548,3.09981s-17.049,37.19774,35.64783,40.29756Z" transform="translate(-347.26688 -151.52732)" fill="#9f616a" /><path d="M391.74562,424.7354l-32.548,3.09981s-17.049,37.19774,35.64784,40.29755Z" transform="translate(-347.26688 -151.52732)" fill="#9f616a" /><path d="M366.60044,258.3401h2.46966V190.68455a39.15718,39.15718,0,0,1,39.15715-39.15723H551.56477a39.15718,39.15718,0,0,1,39.15726,39.1571V561.84816a39.15719,39.15719,0,0,1-39.15715,39.15723H408.22744a39.1572,39.1572,0,0,1-39.15731-39.15708V306.49848h-2.46969Z" transform="translate(-347.26688 -151.52732)" fill="#3f3d56" /><path d="M406.64739,161.71467h18.71028a13.8929,13.8929,0,0,0,12.86292,19.13985h82.1162a13.89286,13.89286,0,0,0,12.86291-19.13987h17.47545a29.24215,29.24215,0,0,1,29.24218,29.24211V561.57589a29.24216,29.24216,0,0,1-29.24214,29.24218H406.64739a29.24216,29.24216,0,0,1-29.24218-29.24214h0V190.95679A29.24214,29.24214,0,0,1,406.64739,161.71467Z" transform="translate(-347.26688 -151.52732)" fill="#fff" /><rect x="100.53673" y="114.01642" width="61.71533" height="14.89247" fill="#fcc309" style={{ isolation: 'isolate' }} /><rect x="97.59857" y="178.00873" width="67.59164" height="14.89247" fill="#e5e5e5" /><rect x="55.96534" y="209.9996" width="150.85812" height="14.89247" fill="#e5e5e5" /><rect x="55.96534" y="241.99047" width="150.85812" height="14.89247" fill="#e5e5e5" /><path d="M852.73312,702.47268l-173.48-197.91713-6.19962-127.09228-65.096-108.49341-18.59887-46.49718s-43.39736,4.64972-7.74953,92.99435l14.72411,47.27213,0,0a216.67408,216.67408,0,0,0-20.14876,91.24394v108.3237c0,25.50678,121.55,164.44287,135.69866,185.6658l0,0Z" transform="translate(-347.26688 -151.52732)" fill="#9f616a" /><polygon points="247.195 126.636 260.136 120.276 259.695 119.378 247.738 125.255 229.688 77.932 228.754 78.289 247.195 126.636" opacity="0.2" /><rect x="358.98404" y="239.81058" width="1.00012" height="20.43016" transform="translate(-346.65612 349.39987) rotate(-69.7779)" opacity="0.2" /><rect x="358.98404" y="297.81058" width="1.00012" height="20.43016" transform="translate(-401.08099 387.35158) rotate(-69.7779)" opacity="0.2" /><rect x="358.98404" y="359.81058" width="1.00012" height="20.43016" transform="translate(-459.25929 427.92066) rotate(-69.7779)" opacity="0.2" /><rect x="364.06574" y="425.55799" width="0.99981" height="10.35283" transform="translate(-528.7721 421.49849) rotate(-64.36101)" opacity="0.2" /><circle cx="131.47081" cy="342.17535" r="43.22999" fill="#fcc309" /><polygon points="127.351 360.424 114.413 343.787 121.937 337.935 128.063 345.812 148.76 323.964 155.681 330.521 127.351 360.424" fill="#fff" /></svg>


                    </div>
                </div>
            </section>

        </>

    )
}
