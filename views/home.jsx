const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <link rel="stylesheet" href="/css/style.css"/>
            </main>
        </Def>
    )
}



module.exports = home
