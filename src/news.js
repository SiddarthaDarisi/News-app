import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, Box, CardContent, CardMedia, Typography, Pagination } from '@mui/material';
function News({ categories }) {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [maxPage, setMaxPage] = useState(5);
    async function getNewsData() {
        setLoading(true);
        console.log(`News: ${categories}`);
        try {
            let promises = categories.map((category) => axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=56a82d7cb569450caef7f9362504d875&page=${page}`
            ));
            const resps = await Promise.all(promises);
            const { totalResults, articles } = resps.reduce((accumulator, currentValue) => {
                accumulator.articles = accumulator.articles.concat(currentValue.data.articles);
                accumulator.totalResults += currentValue.data.totalResults;
                console.log(accumulator.totalResults)
                console.log(accumulator.articles)
                return accumulator;
            }, { totalResults: 0, articles: [] });
            setNewsData(articles);
            setTotalPages(Math.ceil(totalResults / 20));
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getNewsData();
    }, [categories, page]);

    const handlePageChange = (event, value) => {
        if (value >= 1 && value <= maxPage) {
            setPage(value);
        }
    };

    return (
        <>
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination mt={10} count={Math.min(totalPages, maxPage)} page={page} onChange={handlePageChange} />
            </div>
        </>
    );
}

export default News;