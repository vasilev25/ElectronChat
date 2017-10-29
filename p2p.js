var peer = new Peer({
    key: 'h74d0sopbxk73nmi',
    config: {'iceServers': [
        { url: 'stun:stun.l.google.com:19302' },
        { url: 'turn:numb.viagenie.ca', credential: '663896', username: 'pvdev95@gmail.com' }
    ]}
});
let conn;
peer.on('open', function(id) {
    document.getElementById('peerID').innerHTML = id;
    document.getElementById("connect").addEventListener("click", function(){
        var connectedPeerID = document.getElementById('connected').value;
        var conn = peer.connect(connectedPeerID);
        conn.on('open', function(){
            var message = document.getElementById('message').value;
            conn.send(message);
        });
    });

    peer.on('connection', function(conn) {
        conn.on('data', function(data){
          // Will print 'hi!'
          document.getElementById('canvas').innerHTML += data + '</br>';
        });
    });
});





