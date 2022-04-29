/* eslint-disable import/no-anonymous-default-export */
import HeroBanner from '../../components/HeroBanner'

export default {
    title: 'components/HeroBanner',
    component: HeroBanner,
}

const Template = (args) => <HeroBanner {...args} />

export const Hero = Template.bind({})
Hero.args = {
    title: 'title',
    subtitle: 'Subtitle',
    description: 'Description',
    cta: 'CTA',
    ctalink: 'https://example.com',
    image: 'https://via.placeholder.com/1920x1080',
}
