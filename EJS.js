// Modules ch. 10

var months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October',
  'November', 'December'];

var month = {
  name: function(num) {
    return months[num];
  },
  number: function(nam) {
    return months.indexOf(nam);
  }
};
console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
