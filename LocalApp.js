var httpProxy=require('http-proxy');
var url=require('url');
httpProxy.createServer(function(req,res,proxy){
  var request_url="http://";//这里填app.js所放的服务器地址
  var option=url.parse(request_url);
  if(!option.port) option.port=80;
  console.log(req.url);
  req.headers.fetchurl=req.url;
  req.headers.host=option.host;
  req.url='/';
  proxy.proxyRequest(req,res,{
    host : option.host,
    port : 80
  });
}).listen(8787);