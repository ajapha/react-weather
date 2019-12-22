const React = require('react');
const Nav = require('Nav');

module.exports = props => (
    <div>
        <Nav />
        <div className="row">
            <div className="columns medium-6 large-4 small-centered">
                {props.children}
            </div>
        </div>
    </div>
);
