// jshint esversion:6


// console.log(module);


/* Node Module Exports */
// module.exports = 'Hello World';

/* Refactoring and Shortcut */
// module.exports = function getDate() {
// module.exports.getDate = function () {
exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return today.toLocaleDateString('en-US', options);
};

// module.exports.getMonthDay = function () {
exports.getMonthDay = function () {
  const today = new Date();
  const options = {
    day: 'numeric',
    month: 'long'
  };
  return today.toLocaleDateString('en-US', options);
};

// module.exports.getWeekday = function () {
exports.getWeekday = function () {
  const today = new Date();
  const options = {
    weekday: 'long'
  };
  return today.toLocaleDateString('en-US', options);
};
