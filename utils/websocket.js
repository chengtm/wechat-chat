var url = 'wss://loveotoo.com/ws';

function connect (user, func) {
  wx.connectSocket({
    url: encodeURI(url + '?username=' + user.nickName),
  });

  wx.onSocketMessage(func);
}


function send (msg) {
  wx.sendSocketMessage({data:msg});
}
module.exports = {
  connect: connect,
  send : send
}
