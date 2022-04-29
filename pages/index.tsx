import CTABanner from '../components/CTABanner'
import FeatureBanner from '../components/FeatureBanner'
import HeroBanner from '../components/HeroBanner'

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
]

function Home() {
    return (
        <main className="relative flex flex-col flex-grow  justify-center">
            <HeroBanner
                title={'Title'}
                subtitle={'subtitle'}
                description={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam vel ipsam odio quasi porro distinctio, tempora pariatur neque incidunt reiciendis, ut quod tempore molestias necessitatibus eligendi soluta quae doloremque.'
                }
                cta={'cta'}
                image={'https://source.unsplash.com/user/erondu/1600x900'}
                ctalink={'/cta'}
            />
            <FeatureBanner
                header={'header'}
                title={'title'}
                description={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam vel ipsam odio quasi porro distinctio, tempora pariatur neque incidunt reiciendis, ut quod tempore molestias necessitatibus eligendi soluta quae doloremque.'
                }
                features={features}
            />
            <CTABanner
                title={'title'}
                subtitle={'sub'}
                firstlinktitle={'first'}
                firstlinkurl={'first'}
                secondlinktitle={'second'}
                secondlinkurl={'second'}
            />
            <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
                Test
            </div>
        </main>
    )
}

export default Home
