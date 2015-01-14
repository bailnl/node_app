/**
 * 请求时间中间件
 * 选项：
 *  -'time'('Number'): 超时阈值（默认100）
 * @param {Object} opts
 * @api public
 */
module.exports = function (opts) {
    var time = opts.time || 100;
    return function (req, res, next) {
        var timer = setInterval(function () {
            console.log('\033[90m %s %s\033[39m\033[91m mis taking too long! \033[39m'
                , req.method
                , req.url
            );
        },time);
        var end = res.end;
        res.end = function (chunk,encoding) {
            res.end = end;
            res.end(chunk, encoding);
            clearTimeout(timer);
        };
        next();
    };
};