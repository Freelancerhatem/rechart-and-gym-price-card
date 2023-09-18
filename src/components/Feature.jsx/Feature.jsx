
import PropTypes from 'prop-types';
import { IoIosCheckmarkCircle } from "react-icons/io";
const Feature = ({feature,index}) => {
    return (
        <div className='flex'>
            
            <p className='flex items-center justify-center '><span className='text-green-400 mr-2'><IoIosCheckmarkCircle/></span> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string,
    index:PropTypes.number
};

export default Feature;