const React = require('react');
const { IndexLink, Link } = require('react-router');

module.exports = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert('Not ready yet');
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="search weather" />
                            </li>
                            <li>
                                <input type="button" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});
