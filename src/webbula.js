//! Webbula NPM Package
//! version : 1.00.00
//! authors : Thomas Cutting
//! license : MIT (from Webbula, Inc.)
//! reservetechinc.com / webbula.com
module.exports = {
    // Email append functions.
    emailAppend: require('./lib/webbula/email-append'),
    emailPhoneAppend: require('./lib/webbula/email-phone-append'),
    phoneAppend: require('./lib/webbula/phone-append'),
    dobAppend: require('./lib/webbula/dob-append'),
    automobileAppend: require('./lib/webbula/automobile-append'),
    postalAppend: require('./lib/webbula/postal-append'),
    // Reverse email functions.
    piiEmailAppend: require('./lib/webbula/pii-email-append'),
    piiPhoneAppend: require('./lib/webbula/pii-phone-append'),
    piiIpAppend: require('./lib/webbula/pii-ip-append')
};