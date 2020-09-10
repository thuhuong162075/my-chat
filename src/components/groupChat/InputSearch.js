import React from 'react';
import '../../assets/css/InputSearch.css'
import SearchIcon from '../../assets/image/search.svg'
function InputSearch() {
  return (
    <div className="input-group Input_Search">
        <input type="text" placeholder="Search..." name="" className="form-control search" />
        <div className="input-group-prepend">
            <span className="input-group-text search_btn">
              <img 
                src={SearchIcon} 
                width={20} 
                height={20} 
                alt="search-icon"
              />
            </span>
        </div>
    </div>
  );
}

export default InputSearch;
