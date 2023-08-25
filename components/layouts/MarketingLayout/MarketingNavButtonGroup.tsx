import { signOut, useSession } from "next-auth/react";
import ButtonLink from "../../base/Button/ButtonLink";

const MarketingNavButtonGroup = () => {
  const { status } = useSession();

  return status !== "authenticated" ? (
    <div className="mx-4 grid grid-cols-2 content-center gap-4">
      <ButtonLink
        className="h-60px min-w-101px max-w-200px justify-center border-2 border-black bg-black text-center font-bold text-white hover:bg-hyvv-yello hover:text-black"
        intent="primary"
        size="medium"
        roundness="pill"
        href="/auth/signup"
      >
        SIGN UP
      </ButtonLink>
      <ButtonLink
        className=" h-58px min-w-101px max-w-200px justify-center border-2 border-black bg-white text-center font-bold text-black hover:bg-black hover:text-hyvv-yello"
        intent="primary"
        size="medium"
        roundness="pill"
        href="/auth/login"
      >
        LOGIN
      </ButtonLink>
    </div>
  ) : (
    <div className="mx-4 grid grid-cols-2 content-center gap-4 justify-start">
      <div></div>
    <ButtonLink
      className=" h-58px min-w-101px max-w-200px justify-center border-2 border-black bg-white text-center font-bold text-black hover:bg-black hover:text-hyvv-yello"
      intent="primary"
      size="medium"
      roundness="pill"
      href="#"
      onClick={() => signOut()}
    >
      LOGOUT
    </ButtonLink>
    </div>
  );
};

export default MarketingNavButtonGroup;
