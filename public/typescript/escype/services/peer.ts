/**
 * Created by qweqwe on 7/11/13.
 */

class Peer implements IPeer {
	private pc: RTCPeerConnection;
	constructor(configuration: RTCPeerConnectionConfig, options?: MediaConstraints){
		//noinspection JSPotentiallyInvalidConstructorUsage
		this.pc = new webkitRTCPeerConnection(configuration, options);
	}
	dial(){}
	answer(){}
}

class PeerListService implements IPeerListService {
	public list: Peer[];
	private configuration: RTCPeerConnectionConfig;
	constructor(configuration: RTCPeerConnectionConfig){
		this.configuration = configuration
	}
	create(options?: MediaConstraints): Peer {
		return new Peer(this.configuration , options);
	}
	add(peer: Peer) {
		if(!(this.list.indexOf(peer) >= 0)){
			this.list.push(peer);
		}
	}
	remove (peer: Peer) {
		this.list.splice(this.list.indexOf(peer), 1);
	}
}

angular.module('escype.services')
	.factory('peersList', function(){
		return new PeerListService(null);
	});