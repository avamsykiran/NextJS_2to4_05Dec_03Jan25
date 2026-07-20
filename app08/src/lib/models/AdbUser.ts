export type Role = "ADMIN" | "USER";

export interface AdbUser {
    id: string,
    username: string,
    password: string,
    role: Role
}
