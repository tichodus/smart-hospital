import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { UserSession } from "./user-session.service";
import { RequestService } from './request-service.service';



@Injectable()
export class UsersService {
    constructor(private requestService: RequestService) { }




    login(user: User) {
        if (!UserSession.validate(user)) throw Error("Bad request, wrong input data");
        return this.requestService.createPostRequestHeader(user, "login");
    }


    register(user: User) {
        return this.requestService.createPostRequestHeader(user, 'register');
    }

    getAllUsers() {
        return this.requestService.createGetRequestHeader(null, 'getAllUsers');
    }


    getRolesForUser(userId: string) {
        return this.requestService.createGetRequestHeader(userId, 'getRolesForUser');
    }

    getRoleForUser(userId: string, projectId: string) {
        let requestObject = {
            userId: userId,
            projectId: projectId
        }
        return this.requestService.createPostRequestHeader(requestObject, 'getRoleForUserOnProject');
    }

}