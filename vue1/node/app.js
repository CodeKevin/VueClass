const http = require('http')
const urllib = require('url')
const s = http.createServer()
var data = {'name': 'jifeng', 'company': 'taobao'};
s.on('request',function (req,res) {
    var {pathname:url,query} = urllib.parse(req.url,true) //url query
    if(url === '/getscript') {
        var s = `${query.callback}()`
        res.end(s)
    }else {
        res.end('404')
    }
}).listen(3000,function() {
    console.log('s listen at localhost:3000')
})