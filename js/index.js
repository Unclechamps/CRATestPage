let blogPost = document.querySelector('.blog')

const API_KEY = "AIzaSyBSsuC2lj-sPe5DzhsTVrTX24_RgXsqdOQ"
const BLOG_ID = "330206725513860697"
const API_URL = "https://www.googleapis.com/blogger/v3/blogs/"+BLOG_ID+"/posts?key=" + API_KEY

fetch(API_URL)
  .then(response => {
    return response.json()
  }).then(posts => {
    console.log(posts.items)
    posts.items.forEach(post => {
      let blogPostDetail = `<div className="post">
            <div className='top'>
              <h2>${post.title}</h2>
              <h5>by: ${post.author.displayName}</h5>
            </div>
            <div className="content">
              <p>${post.content}</p>
            </div>
            <hr />
            </div>
            `
      blogPost.innerHTML += blogPostDetail
    })
  })
