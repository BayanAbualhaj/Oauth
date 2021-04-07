const URL = 'https://www.facebook.com/v10.0/dialog/oauth';
const options = {
  client_id: 907969493332194,
  redirect_uri: 'http://localhost:3000/auth_',
  scope: ['public_profile', 'email', 'user_friends', 'user_birthday'].join(','),
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
};


const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
  })
  .join('&');
const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${queryString}`;
// const fbLink = document.getElementById('fb-oauth');
// fbLink.setAttribute('href', facebookLoginUrl);

console.log('QUERY',facebookLoginUrl, queryString);

// const authURL = `${URL}?${queryString}`;
const aEl = document.getElementById('oauth');
aEl.setAttribute('href', facebookLoginUrl);