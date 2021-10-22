import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba br3 b--red bg-light-pink'
                type='search' 
                placeholder='Search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;