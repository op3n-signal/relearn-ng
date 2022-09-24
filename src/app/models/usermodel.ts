export class UserModel {
    constructor(
        public id: string,
        public username: string,
        public email: string, 
        public password: string, 
        public confirm_password: string
        ) {}
}