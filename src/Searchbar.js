import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

function SearchBar(props) {
    const { value, onSearch } = props;

    const [searchValue, setSearchValue] = React.useState(value);

    const handleSearch = () => {
        onSearch(searchValue);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            value={searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
}

export default SearchBar;
