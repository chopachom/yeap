var Peer = (function () {
    function Peer(configuration, options) {
        this.pc = new webkitRTCPeerConnection(configuration, options);
    }
    Peer.prototype.dial = function () {
    };
    Peer.prototype.answer = function () {
    };
    return Peer;
})();

var PeerListService = (function () {
    function PeerListService(configuration) {
        this.configuration = configuration;
    }
    PeerListService.prototype.create = function (options) {
        return new Peer(this.configuration, options);
    };
    PeerListService.prototype.add = function (peer) {
        if (!(this.list.indexOf(peer) >= 0)) {
            this.list.push(peer);
        }
    };
    PeerListService.prototype.remove = function (peer) {
        this.list.splice(this.list.indexOf(peer), 1);
    };
    return PeerListService;
})();

angular.module('escype.services').factory('peersList', function () {
    return new PeerListService(null);
});
//@ sourceMappingURL=peer.js.map
