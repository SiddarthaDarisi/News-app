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

    async function getNewsData() {
        try {
            const numCategories = categories.length;
            let divider = 100;
            if (numCategories === 2) {
                divider = 200;
            } else if (numCategories > 2) {
                divider = 250;
            }
            const numArticlesPerCategory = Math.floor( divider / numCategories);
            let promises = categories.map((category) => axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e22725d642174ef0b0f1e1d3ec449714&pageSize=${numArticlesPerCategory}`
            ));
            const resps = await Promise.all(promises);
            const articles = resps.reduce((accumulator, currentValue) => {
                accumulator = accumulator.concat(currentValue.data.articles);
                return accumulator;
            }, []);
            const sortedArticles = articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            return sortedArticles;
        } catch (error) {
            throw new Error(error);
        }
    }

    try {
        const newsData = await getNewsData(categories);
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
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};