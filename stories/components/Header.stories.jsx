/* eslint-disable import/no-anonymous-default-export */
import Header from '../../components/Header'
import { withReactContext } from 'storybook-react-context'
import { UserContext } from '../../lib/userContext'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

export default {
    title: 'components/Header',
    component: Header,
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.decorators = [
    withReactContext({
        Context: UserContext,
        initialState: { user: { id: '1', name: 'John Doe' } },
    }),
]

export const NotLoggedIn = Template.bind({})
NotLoggedIn.decorators = [
    withReactContext({
        Context: UserContext,
        initialState: { user: null },
    }),
]
