
import PropTypes from 'prop-types';

const Link = ({route,index}) => {
    return (
        <div>
            <li className='mr-4' key={route.id}><a href={route.path}>{index+1}{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route:PropTypes.object,
    index:PropTypes.number
};

export default Link;