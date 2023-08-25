import Link from "next/link";

type MarketingNavLinkProps = {
  label: string;
  route: string;
};

const MarketingNavLink = (MarketingNavLinkProps: MarketingNavLinkProps) => {
  const { label, route } = MarketingNavLinkProps;
  return (
    <Link
      href={route}
      key={label + "-link"}
      className="justify-center px-1 text-base font-semibold"
    >
      <div className="rounded-full px-4 py-1 transition-all hover:bg-[#08657e] hover:text-white hover:no-underline">
        {label}
      </div>
    </Link>
  );
};

export default MarketingNavLink;
