export class User {
    constructor(
        private readonly id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: Date,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public updateName(newName: string): void {
        this.name = newName;
    }

    public updateEmail(newEmail: string): void {
        this.email = newEmail;
    }

    public updatePassword(newPassword: string): void {
        this.password = newPassword;
    }
}
