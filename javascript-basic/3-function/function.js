/**
 * Using Variable & Without Return
 */
/**
 * function name difference and variable name differnece is SAME
 * এটা Best Practise নয় এবং করা যাবে না
 */

function difference(physics, english) {
    const difference = english - physics;
    console.log('diffenece between english and physics is that', difference);
}

const physics = 100;
const english = 20;
difference(physics, english)

