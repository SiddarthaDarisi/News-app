import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Pagination, Alert } from '@mui/material';
import { API } from 'aws-amplify';


function News({ categories, searchQuery }) {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchFailed, setSearchFailed] = useState(false);
    const articlesPerPage = 10;



    async function getNewsData() {
        setLoading(true);
        setSearchFailed(false);
        console.log(`News: ${categories}`);
        let apiName;
        let path;
        let init;
        let sanitizedQuery 
        console.log(sanitizedQuery)
        try {
            if (searchQuery) {
                sanitizedQuery = searchQuery.replace(/NOT/g, "-");
                sanitizedQuery = searchQuery.replace(/not/g, "-");
                apiName = 'searchapi';
                path = '/search';
                // Replace "NOT" with "-" symbol in search query
               
                init = {
                    body: { searchQuery: sanitizedQuery }
                };
            } else {
                apiName = 'restnewsApi';
                path = '/news';
                init = {};
                if (categories) {
                    init.body = { categories };
                }
            }

            const response = await API.post(apiName, path, init);
            const sortedArticles = response.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            if (sortedArticles.length === 0) {
                setSearchFailed(true);
            }
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
            {searchFailed ? (
                <Alert severity="error" sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ textAlign: "left" }}>
                        Your search - {searchQuery} - did not match any documents. <br />
                        <br />Suggestions: <br />
                        <ul>
                            <li>Make sure all words are spelled correctly.</li>
                            <li>Try different keywords.</li>
                            <li>Try more general keywords.</li>
                        </ul>
                    </Typography>
                </Alert>
            ) : null}
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
