import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FaExclamation, FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
      <FaExclamationTriangle size={"30"}  className=" text-destructive" />
      </div>
    </CardWrapper>
  );
};
