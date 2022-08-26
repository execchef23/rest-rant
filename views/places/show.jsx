const React = require('react')
const Def = require('../default')

function show (data) {
    let rating = (
        <h3 className="inactive">
          Currently Unrated
        </h3>
    )
    let comments = (
        <h3 className="inactive">
            No comments yet
        </h3>
    )
    return (
        <Def>
          <main>
          <h1>{ data.place.nameS } </h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     
          </main>
        </Def>
    )
}

        

module.exports = show
