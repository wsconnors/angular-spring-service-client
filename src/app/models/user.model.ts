export class UserModel {
    id: string;
    firstName: string;

    constructor(firstName: string, id: string) {
        this.firstName = firstName;
        this.id = id;
    }
}