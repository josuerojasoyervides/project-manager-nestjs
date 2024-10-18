import { UserEntity } from "src/users/domain/entities/user.entity";

export class UpdateUserCommand {
    constructor(
        public readonly id: string,
        public readonly updateData: Partial<UserEntity>,
    ) { }
}
