import Grow from '../lib/Grow.js';
import _ from 'underscore';
import cycles from '../examples/growfiles/cycles';
import phases from '../examples/growfiles/phases';
import cannabis from '../examples/growfiles/cannabis';

const expect = require('chai').expect;

(function setup () {
  beforeEach(function() {
  	// Setup test things
    // console.log(cycles);
    // console.log(phases);
    // Grow.parsePhases(phases);
    // In the future we can test multiple different kinds of things!
  });
  afterEach(function() {
    // delete global.thing;
  });
})();

describe('Growfile test', () => {
  beforeEach(() => {
    global.testPhase = new Grow(phases);
    global.testCycle = new Grow(cycles);
    global.testCannabis = new Grow(cannabis)
  });

  it('should parse and schedule cycles', () => {
    testCannabis.parseCycles(cycles.properties.cycles);
  });

  it('should parse phases', () => {
    testCannabis.parsePhases(phases.properties.phases);
  });

  // it('should register alert event listeners', () => {
  //   testThing.registerAlerts(phases.properties.alerts);
  //   testThing.on('alert', (key, message)=> {
  //     console.log(key);
  //     console.log(message);
  //   });
  //   testThing.emit('temperature', {value: 10});
  // });


});