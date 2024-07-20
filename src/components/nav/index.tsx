"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo'
import Image from 'next/image';
type HomeProps = {

    hero?: boolean
};

export default function Nav({ hero }: HomeProps) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpar o ouvinte de eventos quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrollY);

    return (
        <>
            <style>
                {`
          .bg-img {
            background-repeat: no-repeat;
            min-height: 100vh;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
    
          }

           nav {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }
        `}
            </style>

            <header className="w-full fixed z-50">
                <nav style={{ transition: 'all 1s' }} className={`w-full py-4 flex px-3 sm:px-4 md:px-6 lg:px-10  text-white   ${hero == true ? scrollY > 100 ? "bg-black hadow-sm opacity-95" : " bg-transparent" : "bg-black"}   ease-in-out duration-[3000]`}>

                    <img className='w-[25px] h-[25px] object-cover' src="frelimo.svg" alt="Ícone" />

                    <div className="md:flex justify-end w-full hidden">
                        <ul className="flex gap-6">
                            <li>
                                <Link href={'/'} >Início </Link>
                            </li>    <li>
                                <Link href={'/'} >Candidatos </Link>
                            </li>

                            <li>
                                <Link href={'/'} >Manifestos </Link>
                            </li>
                            <li >

                                <Link href={'/'} className='px-5 py-2 bg-[#fcc309] rounded-lg text-black'>Doar Agora </Link>

                            </li>

                        </ul>
                    </div>
                </nav>
            </header>


        </>
    );
}
