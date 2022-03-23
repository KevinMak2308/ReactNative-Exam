export class FirebaseSignupSuccess {
    //     idToken	string	A Firebase Auth ID token for the newly created user.
    // email	string	The email for the newly created user.
    // refreshToken	string	A Firebase Auth refresh token for the newly created user.
    // expiresIn	string	The number of seconds in which the ID token expires.
    // localId	string	The uid of the newly created user.
    constructor(public idToken: string, public email: string, public refreshToken: string,
        public expiresIn: string, public localId: string) {
    }
}