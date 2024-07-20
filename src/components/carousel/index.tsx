import React, { useState, useEffect } from 'react';

type PropsCarousel = {
    internal?: boolean
}

const Carousel = ({ internal }: PropsCarousel) => {

    const slides = [
        { id: 1, src: '/slide/01.jpg', alt: 'Slide 1' },
        { id: 2, src: '/slide/02.jpg', alt: 'Slide 2' },
        { id: 2, src: '/slide/03.jpg', alt: 'Slide 3' },
        { id: 1, src: '/slide/04.jpg', alt: 'Slide 4' },
        { id: 2, src: '/slide/05.jpg', alt: 'Slide 5' },
        { id: 2, src: '/slide/06.jpg', alt: 'Slide 6' },
        { id: 2, src: '/slide/07.jpg', alt: 'Slide 7' },];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const getButtonColor = (index: number) => {
        if (index === currentSlide) {
            switch (index) {
                case 0: return 'bg-[#fcc309]';
                case 1: return 'bg-black';
                case 2: return 'bg-green-500';
                case 3: return 'bg-[red]';
                case 4: return 'bg-[#fcc309]';
                case 5: return 'bg-black';
                case 6: return 'bg-green-500';

                default: return 'bg-[red]';
            }
        } else {
            return 'bg-gray-300';
        }
    };

    return (
        <div className="relative w-full h-screen bg-contain">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`h-full bg-fixed min-h-screen w-full bg-center bg-cover absolute top-0 left-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 100%, rgba(0,0,0,0.3) 100%) ,url(${slide.src})` }}
                >
                    <div className='w-full flex flex-col justify-center text-white items-center h-full mt-28'>
                        <h1 className={`max-w-2xl mb-4 font-extrabold tracking-tight leading-none ${internal ? "hidden" : "text-2xl md:text-3xl xl:text-4xl text-center"}`}>
                            Trazendo o melhor da Comunidade
                        </h1>
                        <p className={internal ? "hidden" : "max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl"}>
                            As Indicações Regionais Estão Abertas!
                        </p>

                    </div>
                </div>
            ))}

            <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 mt-2 mb-5">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-8 h-1 rounded-sm ${getButtonColor(index)}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            <button
                className="absolute top-1/2 left-3 lg:left-10 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 transition-opacity duration-200 hover:opacity-75"
                onClick={goToPreviousSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="absolute top-1/2 right-3 lg:right-10 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 transition-opacity duration-200 hover:opacity-75"
                onClick={goToNextSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Carousel;
