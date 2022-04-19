import Loader from "../../components/Loader";

export default {
    title: "components/Loader",
    component: Loader,
    argTypes: {
        variant: {
            options: ['true', 'false'],
            control: { type: 'radio' },
        },
        },
};

const Template = (args) => <Loader {...args} />;

export const True = Template.bind({});
True.args = {
    variant: true,
};