import React from 'react'
import SearchHeader from './SearchHeader.js';
import CourseAutoComplete from './CourseSearchAutoComplete.js';

const SearchSider = () => {
    return(
        <div>
            <SearchHeader/>
            <CourseAutoComplete/>
        </div>
    )
}

export default SearchSider