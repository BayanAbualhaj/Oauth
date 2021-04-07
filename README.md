# OAuth Comparative Analysis
​
## OAuth Provider Name : Facebook
​
### Research Conducted By:
- Bayan AbuAlhaj
- Faten Samman
- Hamzeh Shamoun
- Ibrahim Jabr 
​
### Overall Score and Comments
#### Score (Out of 10):
#### General Comments
Describe the general usability and learnability
​we used a third party framework auth (o Auth)  

#### Pros
* App production performance is improved, 
* product quality is improved,
* system development costs are greatly reduced.

​
#### Cons
One disadvantage is that OAuth is a little more complicated than other potential authentication methods.

### Ratings and Reviews
#### Documentation
we thought that its really complicated way and it has a give us alot of errors, and it let u to thank god when it work fine
​
#### Systems Requirements
Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework?  Can it play at 
AWS/Heroku?  Does it require a certain database?
- dependencies: dotenv, express, mongoose, morgan, superagent,jsonwebtoken, fs, base-64, bcrypt
- database: mongo data base 
- yes it can play on heroku
​
#### Ramp-Up Projections
How long would/should it take a team of mid-junior developers to become productive?
we think we really need alot of time just to practise all ideas that we got.
​
### Links and Resources
* [framework](https://tools.ietf.org/html/rfc6749)
* [docs](https://tools.ietf.org/html/)

​**************
### Code Demos
* [code repository](https://github.com/BayanAbualhaj/Oauth)
​
### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
1- install these libraries by by `npm install express dotenv morgan cors superagent mongoose jsonwebtoken fs base-64 bcrypt`
2- create .env file with these variables:

    `PORT=3000
    MONGODB_URI=mongodb+srv://bayan:0000@cluster0.hwado.mongodb.net/auth?retryWrites=true&w=majority
    SECRET=secretline
    CLIENT_ID=
    CLIENT_SECRET=
    REDIRECT_URI=`
3- `npm start`

* Facebook Test Account :
    email: kwerrbfbni_1617823385@tfbnw.net
    Password:asac123