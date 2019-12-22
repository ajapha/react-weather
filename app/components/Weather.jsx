const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleSearch: function(location) {
        this.setState({ isLoading: true });
        openWeatherMap.getTemp(location)
          .then(temp => this.setState({ location, temp, isLoading: false }))
          .catch(errMsg => {
            this.setState({ isLoading: false });
            alert(errMsg)
        });
    },
    render: function() {
        const { location, temp, isLoading } = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3>Loading weather ...</h3>;
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        
        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

/*
Source Map Library Issue
Due to a library bug there is a small issue in the next video. In the next lecture you'll learn how to setup source maps by setting a "devtool" property in webpack.config.js. In the lecture I set the value to "cheap-module-eval-source-map". This might cause the source maps to not work as shown in the video.

If you are getting this error, try setting the value to either "inline-source-map" or "eval-source-map" instead.

As always, I'm here if you run into any issue or have any questions. 

- Andrew
*/