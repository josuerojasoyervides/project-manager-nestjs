import { UserPartialUpdate } from "../models/user-partial-update.model";

export class UserPartialUpdateBuilder {
    private id: string;
    private name?: string;
    private email?: string;
    private password?: string;

    constructor(id: string) {
        if (!id) {
            throw new Error('ID is required');
        }
        this.id = id;
    }

    public setName(name: string): UserPartialUpdateBuilder {
        this.name = name;
        return this;
    }

    public setEmail(email: string): UserPartialUpdateBuilder {
        this.email = email;
        return this;
    }

    public setPassword(password: string): UserPartialUpdateBuilder {
        this.password = password;
        return this;
    }

    public build(): UserPartialUpdate {
        return new UserPartialUpdate (
            this.id,
            this.name,
            this.email,
            this.password,
        )
    }
}