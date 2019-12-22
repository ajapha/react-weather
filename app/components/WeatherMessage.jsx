const React = require('react');

module.exports = ({ location, temp }) => (
    <p>The weather is {temp} in {location}</p>
);