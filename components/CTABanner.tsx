interface CTAProps {
    title: string
    subtitle: string
    firstlinktitle: string
    firstlinkurl: string
    secondlinktitle: string
    secondlinkurl: string
}

function CTABanner({
    title,
    subtitle,
    firstlinkurl,
    firstlinktitle,
    secondlinktitle,
    secondlinkurl,
}: CTAProps) {
    return (
        <div className="container mx-auto mb-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gray-50">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">{title}</span>
                <span className="block text-indigo-600">{subtitle}</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <a
                        href={firstlinkurl}
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        {firstlinktitle}
                    </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                    <a
                        href={secondlinkurl}
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                        {secondlinktitle}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CTABanner
