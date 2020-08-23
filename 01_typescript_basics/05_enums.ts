enum UserRole {
    ADMIN   = 'admin',
    USER    = 'user',
}

function isAdmin(c: UserRole) {
    if (c === UserRole.ADMIN) {
        return true;
    }

    return false;
}

const role: UserRole = UserRole.ADMIN;

console.log(role);
isAdmin(role);