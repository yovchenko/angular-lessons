import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { User } from "./user";
import { USERS } from "./data";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(id: number) {
    return from(USERS).pipe(
      filter((user: User) => {
        return user.id === id;
      })
    );
  }
}
