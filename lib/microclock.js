'use strict';

const timezones = require('./timezones');
const dateformat = require('dateformat');

/**
 * 
 */
class MicroClock {

    constructor(timestamp = false) {
        this.timezones = timezones;

        if (!timestamp) {
            this.timestamp = new Date();
        } else {
            this.timestamp = new Date(timestamp);
        }
    };
    /**
     * Format Timestamp to String
     * @param {*} format 
     */
    format(format) {
        return dateformat(this.timestamp, format);
    };
    /**
     * Change date timezone converting GMT
     * @param {*} timezone 
     */
    toTimezone(timezone) {

        let timezoneID = timezone.replace('/', '-');

        let match = this.timezones.filter((timezoneOffset, index, timezones) => {
            return timezoneOffset.TimeZoneId.toLowerCase() == timezoneID.toLowerCase();
        });

        //Convert 
        let clientOffset = new Date().getTimezoneOffset() / 60;
        let timeZoneDSTOffset = parseInt(match[0].GMT);
        let offsetCorrection = (0 - 3) * 60 * 60 * 1000;

        let newTime = new Date(this.toTimestamp() * 1000 + offsetCorrection);

        return newTime.toLocaleString();
    };
    /**
     * Get timestamp from date
     */
    toTimestamp() {
        let time = Date.parse(this.timestamp);
        return time / 1000;
    };
    /**
     * Returning date to string
     */
    toString() {
        return this.timestamp.toString();
    };
    /**
     * 
     */
    toUTCString() {
        return this.timestamp.toUTCString();
    };


}

module.exports = MicroClock;