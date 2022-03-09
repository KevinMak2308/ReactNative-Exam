export class User {
    email: string;
    displayname?: string;
    photoUrl?: string

    constructor(email: string, displayname?: string, photoUrl?: string) {
        this.email = email;
        this.displayname = displayname;
        this.photoUrl = photoUrl;
    }
}