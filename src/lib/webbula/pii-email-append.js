const config = require('./util/config');
const auth = require('./util/auth');
const request = require('request');
/**
 * Run the reverse lookup algo for email.
 * @param email_address
 * @returns mixed
 */
module.exports = (email_address) => {
    request.post(`${config.uri}/append`,{
        form:{
            login: auth.login_key,
            auth_key: auth.auth_key,
            append_type: "EPII",
            email: email_address
        },
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        }
    },(err,res,body) => {
        if(err) {
            console.error(err);
            return -1;
        } else {
            if(body.success) {
                return {
                    first_name: body.individual.first_name,
                    last_name: body.individual.last_name,
                    address_1: body.individual.address,
                    address_2: body.individual.address2,
                    postal_code: body.individual.zip5
                };
            } else {
                return false;
            }
        }
    });
};