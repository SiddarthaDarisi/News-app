import { AppBar, Toolbar, Container, Typography, Button, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import News from './news';

function Navbar2() {
    // return (
    //     <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
    //         <Box sx={{ flexGrow: 0 }} >

    //             <Button >Home</Button>
    //             <Button value="General"  >General</Button>
    //             <Button value="Business">Business</Button>

    //             <Button value="Entertainment">Entertainment</Button>
    //             <Button value="Health">Health</Button>
    //             <Button value="Science">Science</Button>
    //             <Button value="Sports">Sports</Button>

    //             <Button value="Technology">Technology</Button>


    //         </Box>


    //     </AppBar>

    const [selectedButton, setSelectedButton] = useState('Home');

    const handleButtonClick = (event) => {
        setSelectedButton(event.target.value);
    };

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
                <Box sx={{ paddingTop: "5px" }}>
                    {selectedButton === 'Home' ? (
                        <News categories={['general']} />
                    ) : (
                        <News categories={[selectedButton]} />
                    )}
                </Box>
            </Container>
        </>
    );
}



export default Navbar2;