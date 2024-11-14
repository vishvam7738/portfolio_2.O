import React from 'react';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
    return (
        <div className='relative pb-14'>
            <div className='absolute inset-0 -z-10'>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div
                className="h-screen w-full dark:bg-black-100  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>
        </div>
    );
};

export default Hero;