const config = require('./util/config');
const auth = require('./util/auth');
const request = require('request');
/**
 * Run the postal append algo.
 * @param first_name
 * @param last_name
 * @param email_address
 * @returns mixed
 */
module.exports = (first_name, last_name, email_address) => {
    request.post(`${config.uri}/append`,{
        form:{
            login: auth.login_key,
            auth_key: auth.auth_key,
            append_type: "FLEA",
            first_name: first_name,
            last_name: last_name,
            email: email_address
        },
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        }
    },(err,res,body) => {
        if(err) {
            return false;
        } else {
            return body;
        }
    });
};