import { v4 as uuidv4 } from 'uuid';

export class UserId {
    private readonly value: string;

    private constructor(value: string) {
        this.value = value;
    }

    static create(id?: string): UserId {
        if (id) {
            return new UserId(id);
        }
        return new UserId(uuidv4());
    }

    public getValue(): string {
        return this.value;
    }

    public equals(other: UserId): boolean {
        return this.value === other.getValue();
    }

    public toString(): string {
        return this.value;
    }
}
