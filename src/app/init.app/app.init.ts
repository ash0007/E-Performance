import { UserInit } from './user.init';
import { LoggedInUserService } from '../core/logged-in-user/service/logged-in-user.service';
import { of, Observable, forkJoin } from 'rxjs';

export function AppInit(
    loggInUserSrv: LoggedInUserService
) {
    return new Promise((resolve, reject) => {
        const sequence: Array<Observable<any>> = [ forkJoin(UserInit(loggInUserSrv)) ];
        of(...sequence).subscribe(
            next => {
                console.log(next);
            },
            err => {
                console.log(err)
            },
            () => {
                resolve();
            }
        );
    });

}