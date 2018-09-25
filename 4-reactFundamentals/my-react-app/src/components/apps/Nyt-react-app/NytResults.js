import React from 'react';

const NytResults = (props) => {
    return(
        <div> 
            {props.results.map(results => {
        return(
            <div key={results._id}>
            <h2>{results.headline.main}</h2>
            {results.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${results.multimedia[1].url}`} /> : ''}
            <p>
              {results.snippet}
              <br />
                {results.keywords.length > 0 ? 'Keywords: ' : ''}
            </p>
            <ul>
                {results.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
            </ul>
            <a href={results.web_url}><button>Read It</button></a>
            <br />
            <br />
        </div>
        )
     })}
     <div>
        <button onClick={e => props.changePage(e, 'down')}>Previous 10</button>
        <button onClick={e => props.changePage(e, 'up')}>Next 10</button>
    </div>
    </div>
    )
}

export default NytResults