/* eslint-disable import/no-anonymous-default-export */
import CTABanner from '../../components/CTABanner'

export default {
    title: 'components/CTABanner',
    component: CTABanner,
}

const Template = (args) => <CTABanner {...args} />

export const CTA = Template.bind({})
CTA.args = {
    title: 'title',
    subtitle: 'Subtitle',
    firstlinktitle: 'First link title',
    firstlinkurl: 'https://example.com',
    secondlinktitle: 'Second link title',
    secondlinkurl: 'https://example.com',
}
