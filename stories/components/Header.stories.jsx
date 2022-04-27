/* eslint-disable import/no-anonymous-default-export */
import Header from '../../components/Header'

export default {
    title: 'components/Header',
    component: Header,
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
    user: 'test',
}

export const NotLoggedIn = Template.bind({})
NotLoggedIn.args = {
    user: null,
}
