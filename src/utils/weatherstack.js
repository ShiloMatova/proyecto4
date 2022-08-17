const request = require('request')

const weatherstack = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=058227163910f2ffa272f3744fc739cd&query=' + city

    console.log(url);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ ' Temperatura actual: ' + body.current.temperature + ' grados ' )
        }
    })
}

module.exports = weatherstack