require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('You are on homepage')
})
let githubData = {
    "login": "tawkeer",
    "id": 85127027,
    "node_id": "MDQ6VXNlcjg1MTI3MDI3",
    "avatar_url": "https://avatars.githubusercontent.com/u/85127027?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tawkeer",
    "html_url": "https://github.com/tawkeer",
    "followers_url": "https://api.github.com/users/tawkeer/followers",
    "following_url": "https://api.github.com/users/tawkeer/following{/other_user}",
    "gists_url": "https://api.github.com/users/tawkeer/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tawkeer/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tawkeer/subscriptions",
    "organizations_url": "https://api.github.com/users/tawkeer/orgs",
    "repos_url": "https://api.github.com/users/tawkeer/repos",
    "events_url": "https://api.github.com/users/tawkeer/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tawkeer/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tawkeer bhat",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "computer science \r\n student",
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-05-31T16:57:00Z",
    "updated_at": "2023-01-07T06:44:25Z"
  }
app.get('/github',(req,res)=>{
 res.json(githubData)    
})
app.get('/login',(req,res)=>{
    res.send("Please login")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})