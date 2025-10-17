import { getUserFollowersApi, getUserFollowingApi } from "@/core/user/user.api";

export const FOLLOW_CONFIG = {
    followers: {
        fetchFn: getUserFollowersApi,
        emptyKey: "notFollowersYet",
        loadingKey: "loadingFollowers",
    },
    following: {
        fetchFn: getUserFollowingApi,
        emptyKey: "notFollowingYet",
        loadingKey: "loadingFollowing",
    },
};
