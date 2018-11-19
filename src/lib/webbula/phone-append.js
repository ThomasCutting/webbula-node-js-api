const config = require('./util/config');
const auth = require('./util/auth');
const request = require('request');
/**
 * Run the telephone append algo.
 * @param first_name
 * @param last_name
 * @param postal_address
 * @param postal_code
 * @returns mixed
 */
module.exports = (first_name, last_name, postal_address, postal_code) => {
    request.post(`${config.uri}/append`,{
        form:{
            login: auth.login_key,
            auth_key: auth.auth_key,
            append_type: "TA",
            first_name: first_name,
            last_name: last_name,
            address: postal_address,
            zip: postal_code
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