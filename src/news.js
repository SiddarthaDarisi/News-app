import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
function News(props) {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);



    async function getNewsData() {
        setLoading(true);
        try {
            const resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e22725d642174ef0b0f1e1d3ec449714`);
            setNewsData(resp.data.articles);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        getNewsData();
    }, [props.category]);
    return (
        <Grid container spacing={2}>
            {loading ? (
                <Typography variant="h5">Loading...</Typography>
            ) : (
                newsData.map((newsData, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={newsData.urlToImage}
                                alt="news"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {newsData.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {newsData.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    );
}

export default News;