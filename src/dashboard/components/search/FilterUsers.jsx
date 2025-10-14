export const FilterUsers = (users, searchLower, isExact, excludeList = []) => {
    return users.filter((user) => {
        if (!user.id) return false;
        if (excludeList.includes(user)) return false;

        const method = isExact ? "startsWith" : "includes";

        return (
            user.firstName?.toLowerCase()[method](searchLower) ||
            user.displayName?.toLowerCase()[method](searchLower) ||
            user.lastName?.toLowerCase()[method](searchLower) ||
            user.username?.toLowerCase()[method](searchLower) ||
            user.email?.toLowerCase()[method](searchLower) ||
            user.role?.toLowerCase()[method](searchLower)
        );
    });
};
