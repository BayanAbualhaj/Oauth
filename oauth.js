'use strict';

const dotenv = require('dotenv');
dotenv.config();
const superagent = require('superagent');
const User = require('./users');

const tokenServerUrl = 'https://graph.facebook.com/v4.0/oauth/access_token';
// const remoteAPI=


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.SECRET;
const API_SERVER = process.env.REDIRECT_URI;


module.exports = async (req, res, next) => {
    try {
        console.log("*****************");
        const code = req.query.code;
        // console.log(code);
        const remoteToken = await codeForToken(code);
        // console.log(remoteToken);

    } catch (error) {
        next(error.message);
    }
}


async function codeForToken(code) {
    try {
        console.log(code)
        const tokenResponse = await superagent.get(tokenServerUrl).query({
            code: code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: API_SERVER,
            grant_type: 'authorization_code',
        });

        const access_token = tokenResponse.body.access_token;
        return access_token;
    } catch (error) {
        console.log('******?????', error.message);
    }

}

