export class UserPartialUpdate {
    id: string;
    name: string;
    email: string;
    password: string;

    static validate(update: UserPartialUpdate) {
        // Lógica de validación aquí
    }
    
    constructor(id: string, name?: string, email?: string, password?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    
        UserPartialUpdate.validate(this);
    }
}