import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export const UserProgress = () => {
    const { user } = useContext(AuthContext);
    console.log(user.sagaProgress);
    console.log(user.experience);

    return (
        <section>
            <p>
                {user?.sagaProgress.currentSaga}
                {user?.sagaProgress.episode}
            </p>
            <p>{user?.experience}</p>
        </section>
    );
};
