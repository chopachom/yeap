var WebSocketServer = require('ws').Server
	, wss = new WebSocketServer({port: 8765})
	, Cookies = require('cookies');

var connections = {
	store: {},
	publish: function(message){
		for(var c in this.store){
			//noinspection JSUnfilteredForInLoop
			this.store[c].send(message)
		}
	}
};

wss.on('connection', function(conn) {
	var isAuthenticated = false,
		// actually the second parameter is response object but since we don't have response object
		// we just pass an empty object this is enough unless we gonna set cookies
		cookies = new Cookies(conn.upgradeReq, {}),
		username = cookies.get('username');

	if(username && username.length > 0) isAuthenticated = true;

  console.log('open');
  if(!isAuthenticated) {
    conn.close();
    return;
  }
  connections.publish(JSON.stringify({type: 'connected', username: username}));
  connections.store[username] = conn;

	conn.on('message', function(rawMsg) {
		var message;
		try {
			message = JSON.parse(rawMsg)
		} catch (e) {
			console.error("couldn't parse incoming message, %s", rawMsg)
		}
		console.log('received: %s', rawMsg);
	});

	conn.on('close', function(){
		delete connections.store[username];
	});

});