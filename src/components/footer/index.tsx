




export default function Footer() {
    return (


        <footer className="bg-zinc-950 text-white ">


            <style>
                {` @import url('https://fonts.googleapis.com/css2?family=Playwrite+VN:wght@100..400&display=swap');
        
        
.playwrite-vn {
  font-family: "Playwrite VN", cursive;
  font-optical-sizing: auto;
  font-weight:700;
  font-style: normal;
        `
                }
            </style>

            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 pt-4">


                        <span className='playwrite-vn sm:text-2xl md:text-3xl text-xl lg:text-6xl '>Viva Chapo</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Recursos</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="" className="hover:underline">Votos Por pagamentos</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white  uppercasetext-white">Siga-nos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="" className="hover:underline ">Instagram</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" className="hover:underline">Facebook</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Termos</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6  sm:mx-autoborder-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm  sm:text-center text-gray-400">© 2024 <a href="#" className="hover:underline">MMA</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className=" hover:text-gray-900 text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>

                        <a href="#" className="text-gray-500  hover:text-white ms-5">
                            <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true" fill="white" className=" size-4"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>

                            <span className="sr-only">Twitter page</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    );
}
