const axios = require('axios');

/* Amplify Params - DO NOT EDIT
    API_NEWSAPP_GRAPHQLAPIENDPOINTOUTPUT
    API_NEWSAPP_GRAPHQLAPIIDOUTPUT
    API_NEWSAPP_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const categories = JSON.parse(event.body).categories;
    const searchQuery = JSON.parse(event.body).searchQuery;

    async function getNewsData() {
        try {
            let url;
            if (searchQuery) {
                url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=56a82d7cb569450caef7f9362504d875`;
                const resp = await axios.get(url);
                const sortedArticles = resp.data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
                return sortedArticles;
            } else {
                const numCategories = categories.length;
                let divider = 100;
                if (numCategories === 2) {
                    divider = 200;
                } else if (numCategories > 2) {
                    divider = 250;
                }
                const numArticlesPerCategory = Math.floor(divider / numCategories);
                
                const allArticles = [];
                for (const category of categories) {
                    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d1165b675f3b450a9879de4ff8997ac9&pageSize=${numArticlesPerCategory}`;
                    const resp = await axios.get(url);
                    allArticles.push(...resp.data.articles);
                }
    
                const sortedArticles = allArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
                return sortedArticles;
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    
    try {
        const newsData = await getNewsData(categories, searchQuery);
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify(newsData)
        };
    } catch (error) {
        return {
            statusCode: 404,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};