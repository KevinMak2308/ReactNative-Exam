export class Chatroom {
    constructor(public title: string, public status: Status,
        public message: string, public timestamp: Date) { }
}

enum Status {
    READ = "READ", UNREAD = "UNREAD"
}