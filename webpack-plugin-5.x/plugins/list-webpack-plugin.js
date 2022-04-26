class ListWebpackPlugin {
    constructor(options) {
        console.log('options:', options);
        this.filename = options.filename || 'fileList.md';
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync('ListWebpackPlugin', (compilation, callback) => {
            let fileList = 'In this build: \n\n';
            Object.keys(compilation.assets).forEach(fileName => {
                fileList += `- ${fileName}\n   -  size: ${compilation.assets[fileName].size()}\n`;
            });
            compilation.assets[this.filename] = {
                source: function () {
                    return fileList;
                },
                size: function () {
                    return fileList.length;
                }
            };

            callback();
        });

        // 在输出 asset 之前调用，返回 true 以输出 output 结果，否则返回 false
        compiler.hooks.shouldEmit.tap('ListWebpackPlugin', compilation => {
            console.log('hello, shouldEmit hook');
            return true;
        });
    }
}

module.exports = ListWebpackPlugin;
