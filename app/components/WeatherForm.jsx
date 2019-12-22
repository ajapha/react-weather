const React = require('react');

module.exports = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        if (!this.refs.location.value) return;
        const location = this.refs.location.value;
        this.refs.location.value = '';
        this.props.onSearch(location);
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Enter city name" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});