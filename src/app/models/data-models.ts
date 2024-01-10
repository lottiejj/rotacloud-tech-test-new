

export interface UserModel {
    id: number;
    name: string;
    roles: number[];
}

export interface RoleModel {
    id: number;
    name: string;
    colour: string;
}

export interface UserModelWithFullRole {
    id: number;
    name: string;
    roles: RoleModel[];
}

export interface RoleModelWithUsers {
    id: number;
    name: string;
    colour: string;
    users: UserModel[];
}