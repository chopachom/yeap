/**
 * Created by qweqwe on 7/12/13.
 */
interface IUserService {
	authenticated: boolean;
	name: string;
	onauthenticated();
	onlogout();
	authenticate();
	login(credentials: {username:string; password:string})
	logout();
}