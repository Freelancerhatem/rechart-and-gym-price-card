import PropTypes from 'prop-types';
import Feature from '../Feature.jsx/Feature';

const PriceOption = ({Price}) => {
    const{name,price,features} =Price ;
    return (
        <div>
            <div className='bg-yellow-200 flex-1 m-3 h-72 '>
                <h1 className='text-5xl font-extrabold'>{price}</h1>
                <h1 className='text-4xl font-semibold'>{name}</h1>
                {
                    features.map((feature,index)=><Feature key={index} index ={index} feature={feature}></Feature>)
                }
                <div className='text-center'>
                    <button className='bg-lime-300 w-96 px-5 '>Purchase!</button>
                </div>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    Price:PropTypes.object
};

export default PriceOption;