/* eslint-disable import/no-anonymous-default-export */
import TableDisplay from '../../components/TableDisplay'

export default {
    title: 'components/TableDisplay',
    component: TableDisplay,
}

const Template = (args) => <TableDisplay {...args} />

export const Default = Template.bind({})
Default.args = {
    products: [
        {
            category: 'Category 1',
            name: 'Name 1',
            description: 'Description 1',
            quantity: 1,
            cost: 1,
            link: 'https://www.google.com',
        },
        {
            category: 'Category 2',
            name: 'Name 2',
            description: 'Description 2',
            quantity: 2,
            cost: 2,
            link: 'https://www.google.com',
        },
        {
            category: 'Category 3',
            name: 'Name 3',
            description: 'Description 3',
            quantity: 3,
            cost: 3,
            link: 'https://www.google.com',
        },
    ],
}
