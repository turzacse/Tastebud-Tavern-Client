import { Helmet } from "react-helmet-async";


const Meta = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default Meta;