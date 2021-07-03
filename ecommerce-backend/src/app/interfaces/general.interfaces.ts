export enum Roles {
    Admin = "ADMIN",
    Reader = "READER",
    Writer = "WRITER"
}

export enum Permissions {
    Read = "READ",
    Create = "CREATE",
    Delete = "DELETE",
    Update = "UPDATE"
}

export const roles = {
    [Roles.Admin]: {
        can: [Permissions.Read, Permissions.Create, Permissions.Delete, Permissions.Update]
    },

    [Roles.Writer]: {
        can: [Permissions.Read, Permissions.Create]
    },

    [Roles.Reader]: {
        can: [Permissions.Read]
    }
}
