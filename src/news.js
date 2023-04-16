import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Pagination } from '@mui/material';
import { API } from 'aws-amplify';

function News({ categories,searchQuery }) {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const articlesPerPage = 10;



    async function getNewsData() {
        setLoading(true);
        console.log(`News: ${categories}`);

        try {
            const apiName = 'restnewsApi';
            const path = '/items'; // You can leave this as '/' since we don't need to specify a path in this case
            const init = {
                body: { searchQuery,categories }
            };

            const response = await API.post(apiName, path, init);
            const sortedArticles = response.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            setNewsData(sortedArticles);
            setTotalPages(Math.ceil(sortedArticles.length / articlesPerPage));
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getNewsData();
    }, [categories]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;

    return (
        <>
            <Grid container spacing={2}>
                {loading ? (
                    <Typography variant="h5">Loading...</Typography>
                ) : (
                    newsData.slice(start, end).map((newsData, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="140" image={newsData.urlToImage} alt="news" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {newsData.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {newsData.description}
                                    </Typography>
                                    <Typography variant='body2' color="text.secondary" fontSize={9} sx={{ position: 'absolute', bottom: 0, right: 0 }}>
                                        {newsData.publishedAt}
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                    ))
                )}
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination mt={10} count={totalPages} page={page} onChange={handlePageChange} />
            </div>
        </>
    );
}

export default News;
