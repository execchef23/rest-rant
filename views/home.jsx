const React = require('react')
const Def = require('../default')

function home () {
  return (
    <Def>
        <main>
          <h1>REST Rant</h1>
          <a href='/places'>Come see our places</a>
          <div>
            <img src="https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNhbiUyMGZvb2QlMjBmcmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"  alt="Mexican"/>
            <div>
            Photo by <a href="https://unsplash.com/@edgarraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar Castrejon</a> on <a href="https://unsplash.com/s/photos/mexican-food-free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </main>
    </Def>
  )
}

module.exports = home