
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
             <title> RedChili | {title} </title>
        </Helmet>
    );
};
PageTitle.propTypes = {
    title: PropTypes.string
}
export default PageTitle;