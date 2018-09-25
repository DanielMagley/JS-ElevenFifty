import React from 'react';

const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <body>
                        <h1>Functional Component</h1>
                        <p>Functional Components allow you to render information to the web page without having to use or change state.</p>
                    <dl>
                        <dt><u>Presentational</u></dt>
                        <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                        <dt><u>No 'this' keyword</u></dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd>
                        <dt><u>No State</u></dt>
                        <dd>These are 'dumb' components for UI</dd>
                        <dt><u>return()</u></dt>
                        <dd>Must return a single element</dd>
                    </dl>
                </body>
            </div>
        </div>
    );
};


export default FunctionalComponentDemo;


