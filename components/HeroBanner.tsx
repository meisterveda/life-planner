import React from 'react'

interface HeroProps {
    title: string
    subtitle: string
    description: string
    cta: string
    ctalink: string
    image: string
}

function HeroBanner({
    title,
    subtitle,
    description,
    cta,
    ctalink,
    image,
}: HeroProps) {
    return (
        <div className="container px-6 py-4 mx-auto mb-8 lg:flex lg:h-128 lg:py-16 ">
            <div className="container px-6 py-4 mx-auto lg:flex lg:h-96 lg:py-16 items-center">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div className="max-w-lg">
                        <h1 className="text-xl tracking-wide text-gray-600 lg:text-4xl">
                            {title}
                        </h1>
                        <h3 className="text-l tracking-wide text-gray-400 lg:text-3xl">
                            {subtitle}
                        </h3>
                        <p className="mt-4 text-gray-300">{description}</p>
                        <div className="mt-6">
                            <a
                                href={ctalink}
                                className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400"
                            >
                                {cta}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                    <img
                        className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                        src={image}
                        alt="apple watch photo"
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
