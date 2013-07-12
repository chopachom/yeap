/**
 * Created by qweqwe on 7/12/13.
 */
interface IUserService {
	authenticated: boolean;
	name: string;
	onauthenticated();
	login(credentials: {username:string; password:string})
}