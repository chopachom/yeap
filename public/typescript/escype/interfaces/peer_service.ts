/**
 * Created by qweqwe on 7/12/13.
 */


/// <reference path="../../d.ts/DefinitelyTyped/webrtc/webrtc.RTCPeerConnection.d.ts" />
/// <reference path="../../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />

interface IPeer {
	dial(): void;
	answer(): void;
}

interface IPeerListService {
	list: IPeer[];
	create(options?: MediaConstraints): IPeer;
	add(peer: IPeer);
	remove(peer: IPeer);
}




