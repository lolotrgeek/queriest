const { buildAPI, startAPI } = require('./index')

let params = {}
// the route this api will post data on
// params.route = "/"

// create an alias for `type` argument on incoming query
params.type_alias = "kitten"

// parses incoming query and returns an outgoing query
const build_cat_query = incoming_query => {

    // NOTE! must have `type` as an argument of incoming query or have type set statically with `params` ...

    // http://localhost/?type=fact
    if(incoming_query.type === "fact")  return `https://catfact.ninja/fact`


    // ... or have an alias set in the `params`
    // http://localhost/?kitten=facts
    if(incoming_query.kitten === "facts")  return `https://catfact.ninja/facts`
     
    // can clear the data by returning 'clear'
    // http://localhost/?clear=facts
    if(incoming_query.clear === "facts") return 'clear'
    
}

buildAPI(params, build_cat_query, data => {
    if(data) {
        console.log(data)
        return data
    }
})
startAPI()