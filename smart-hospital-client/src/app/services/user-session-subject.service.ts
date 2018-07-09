
import { Injectable } from "@angular/core";
import { UserSession } from "./user-session.service";
import { Subject } from "rxjs";


@Injectable()

export class UserSessionSubject {
    user: Subject<any> = new Subject();

    update() {
        if (UserSession.getUserFromStorage())
            this.user.next(UserSession.getUserFromStorage());
    }
}