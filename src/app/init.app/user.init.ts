import { LoggedInUserService } from '../core/logged-in-user/service/logged-in-user.service';

export function UserInit(
    loggInUserSrv: LoggedInUserService
) {
    return new Promise((resolve, reject) => {
        loggInUserSrv.loadUserDetail().subscribe((user: any) => {
            
            resolve();
        }, (err) => {
            throw new Error('User Not Found');
            reject();
        });
    });
}