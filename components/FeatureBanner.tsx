import React from 'react'

interface FeaturesDataProps {
    name: string
    description: string
}
interface FeaturesProps {
    header: string
    title: string
    description: string
    features: FeaturesDataProps[]
}

function FeatureBanner({
    header,
    title,
    description,
    features,
}: FeaturesProps) {
    return (
        <div className="container px-6 py-4 mx-auto mb-8 lg:flex lg:h-128 lg:py-16">
            <div className="container px-6 mx-auto lg:flex lg:h-96 lg:py-16 items-center py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                            {header}
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {title}
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            {description}
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                            {feature.name}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureBanner
