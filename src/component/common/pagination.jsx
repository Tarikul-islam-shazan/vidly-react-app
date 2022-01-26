import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from  'prop-types';

const Pagination = (props) => {
    const { itemsCount,pageSize,currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1 ) return null;
    const pages = _.range(1, pagesCount + 1);

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                        <Link 
                            className="page-link" 
                            onClick={ () => onPageChange(page) }
                            to="#"
                        >
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number
};
 
export default Pagination;
