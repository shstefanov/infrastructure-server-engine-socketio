module.exports = function(cb){
  var env    = this;
  env.structureLoader("websocket", function setupWebsocket(name, WebsocketApp){
    WebsocketApp.prototype.env  = env;
    if(!WebsocketApp.prototype.options.path) WebsocketApp.prototype.options.path = "/"+name;
    return new WebsocketApp(env);
  }, cb );

};
