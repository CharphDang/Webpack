const { getOptions } = require('loader-utils');
const less = require('less');
module.exports = function (source) {
    const options = getOptions(this);
    console.log('loader-utils options:', options);
    console.log('options:', this.query);
    console.log('options.name:', this.query.name);
    console.log('options.age:', this.query.age);
    less.render(source, (err, output) => {
        this.callback(err, output.css);
    });
};
