import { AppBar, Toolbar, Container, Typography, Button, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import News from './news';
import SearchBar from './Searchbar';

function Navbar2(props) {
    const [selectedButton, setSelectedButton] = useState('Home');
    const [search, setSearch] = useState("");
    const [searchKey, setSearchKey] = useState(0);

    const handleButtonClick = (event) => {
        setSelectedButton(event.target.value);
        setSearch("");
    };

    const handleSearch = (searchValue) => {
        setSelectedButton(null);
        setSearch(searchValue);
        setSearchKey(searchKey + 1); // Update the search key to force component remount
    }

    return (
        <>
            <AppBar position="static" style={{ bottomMargin: "4px", background: 'white', boxShadow: 'none' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Button
                        value="Home"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'Home' ? 'black' : 'background.paper', color: selectedButton === 'Home' ? 'White' : 'black' }}
                    >
                        Home
                    </Button>
                    <Button
                        value="General"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'General' ? 'black' : 'background.paper', color: selectedButton === 'General' ? 'White' : 'black' }}
                    >
                        General
                    </Button>
                    <Button
                        value="Business"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'Business' ? 'black' : 'background.paper', color: selectedButton === 'Business' ? 'White' : 'black' }}
                    >
                        Business
                    </Button>
                    <Button
                        value="Entertainment"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'Entertainment' ? 'black' : 'background.paper', color: selectedButton === 'Entertainment' ? 'White' : 'black' }}
                    >
                        Entertainment
                    </Button>
                    <Button
                        value="Health"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'Health' ? 'black' : 'background.paper', color: selectedButton === 'Health' ? 'White' : 'black' }}
                    >
                        Health
                    </Button>
                    <Button
                        value="Science"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'Science' ? 'black' : 'background.paper', color: selectedButton === 'Science' ? 'White' : 'black' }}
                    >
                        Science
                    </Button>
                    <Button
                        value="Sports"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'Sports' ? 'black' : 'background.paper', color: selectedButton === 'Sports' ? 'White' : 'black' }}
                    >
                        Sports
                    </Button>
                    <Button
                        value="Technology"
                        onClick={handleButtonClick}
                        sx={{ bgcolor: selectedButton === 'Technology' ? 'black' : 'background.paper', color: selectedButton === 'Technology' ? 'White' : 'black' }}
                    >
                        Technology
                    </Button>
                </Box>
            </AppBar>

            <Container>
                <SearchBar value={search} onSearch={handleSearch} />
                <Box sx={{ paddingTop: "5px" }}>
                    {search ? (
                         <News key={searchKey} searchQuery={search} />
                    ) :selectedButton === 'Home' ? (
                        <News categories={['general']} /> ): selectedButton ? (
                        <News categories={[selectedButton]} />
                    ) : props.categories && props.categories.length > 0 ? (
                        <News categories={props.categories} />
                    ) : (
                        <News categories={['general']} />
                    )}
                </Box>
            </Container>
        </>
    );
}
export default Navbar2;