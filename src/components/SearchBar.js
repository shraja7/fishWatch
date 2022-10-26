import React from 'react'
import * as Mui from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div>

   
    <Mui.TextField id="outlined-basic" label="Find a fish" variant="outlined" 
    InputProps={{
        endAdornment: (
            <Mui.InputAdornment position="end">
                <SearchIcon />
            </Mui.InputAdornment>
        ),
    }}
    
    />
    

   
    </div>
  )
}

export default SearchBar