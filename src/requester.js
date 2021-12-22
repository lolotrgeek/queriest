const https = require('https')

function Requester(url, callback) {
    const req = https.request(url, res => {
        console.log(`statusCode: ${res.statusCode}`)
        let raw = []
        res.on('data', stream => {
            raw.push(stream)
        })
        res.on('close', () => {
            let data = JSON.parse(raw.map(element => element.toString('utf8')).join(''))
            callback(data)
        })
    })
    req.on('error', error => callback(error))
    req.end()
}

module.exports = { Requester }