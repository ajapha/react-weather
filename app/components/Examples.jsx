const React = require('react');
const { Link } = require('react-router');

module.exports = () => (
    <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out</p>
        <ol>
            <li>
                <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
            </li>
            <li>
                <Link to="/?location=Rio">Rio, Brazil</Link>
            </li>
            <li>
                <Link to="/?location=Arlington">Arlington, VA</Link>
            </li>
        </ol>
    </div>
);
