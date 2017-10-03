'use strict';

const expect = require("chai").expect;
const assert = require("chai").assert;
const microclock = require('../lib/index');

const mockDate = "2017-09-20";
const mockTimestamp = 1505865600;
const mockUTCString = "Wed, 20 Sep 2017 00:00:00 GMT";

describe("#MicroClock", () => {

    it("#Timestamp", () => {
        let date = new microclock(mockDate);
        expect(date.toTimestamp()).to.be.equal(mockTimestamp);
    });

    it("#UTCString", () => {
        let date = new microclock(mockDate);
        expect(date.toUTCString()).to.be.equal(mockUTCString);
    });

    it("#Format", () => {
        let date = new microclock(mockDate);
        expect(date.format('yyyy')).to.be.equal('2017');
        expect(date.format('mm')).to.be.equal('09');
        expect(date.format('dd')).to.be.equal('20');
        expect(date.format('yyyy')).to.be.equal('2017');

    });



});