'use strict';

const dotenv = require('dotenv');
dotenv.config();
const superagent = require('superagent');
const User = require('./users');

const tokenServerUrl = 'https://graph.facebook.com/v4.0/oauth/access_token';
const remoteAPI= 'https://graph.facebook.com/me';


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.SECRET;
const API_SERVER = 'http://localhost:3000/auth_';


module.exports = async (req, res, next) => {
    try {
        console.log("*****************");
        const code = req.query.code;
        // console.log(code);
        const remoteToken = await codeForToken(code);
        console.log('***',remoteToken);
        const remoteUser = await getRemoteUserInfo(remoteToken);
        console.log(remoteUser);
        const { user, token } = await getUser(remoteUser);
        
        req.user = user;
        req.token = token;
        next();

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


async function getRemoteUserInfo(token) {
        console.log('567980109879228612');
        console.log(token);
        const userResponse = await superagent
            .get(remoteAPI)
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', ' application/json');

        const user = userResponse.body;
        return user;
}


async function getUser(remoteUser){
    let name = {username:remoteUser.name,
                password:'123456bayan'};
    let username=name.username;
    const user =await User.findOne({username});
    if(user){
        let record={
            user: user.username,
            token:user.token
        }
        return record;
    }else{
        const newUser= new User(name);
        const doc= await newUser.save();
        let record={
            user:doc,
            token:doc.token
        };
        return record;
    }
}
