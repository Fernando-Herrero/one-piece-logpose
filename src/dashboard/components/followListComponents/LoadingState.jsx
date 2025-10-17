import { Spinner } from "@/dashboard/components/community/Spinner";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";

export const LoadingState = ({ text }) => (
    <div className="flex flex-col items-center gap-1">
        <Spinner className="mx-auto mt-5" />
        <p className="text-gradient">
            {text}
            <LoadingDots />
        </p>
    </div>
);
