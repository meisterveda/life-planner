/* eslint-disable import/no-anonymous-default-export */
import FeatureBanner from '../../components/FeatureBanner'

export default {
    title: 'components/FeatureBanner',
    component: FeatureBanner,
}

const Template = (args) => <FeatureBanner {...args} />

export const Feature = Template.bind({})
Feature.args = {
    header: 'Header',
    title: 'Title',
    description: 'Description',
    features: [
        {
            name: 'Feature 1',
            description: 'Description 1',
        },
        {
            name: 'Feature 2',
            description: 'Description 2',
        },
        {
            name: 'Feature 3',
            description: 'Description 3',
        },
        {
            name: 'Feature 3',
            description: 'Description 3',
        },
    ],
}
