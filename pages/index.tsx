import HeroBanner from '../components/HeroBanner'

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
            <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 bg-indigo-500">
                Test
            </div>
        </main>
    )
}

export default Home
