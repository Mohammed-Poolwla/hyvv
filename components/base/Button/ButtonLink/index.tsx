import { AnchorHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonProps as ChakraProps } from "@chakra-ui/react";
import { cn } from "../../../../utils/formatters";

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants>,
    Pick<ChakraProps, "leftIcon"> {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
}

const buttonVariants = cva(
  /* button base style */
  "h-fit flex text-slate-800 transition-all align-center items-center",
  {
    variants: {
      /* button colors */
      intent: {
        primary: "bg-[#cee0e5] hover:bg-[#aed5e0] text-[#08657E] font-semibold",
        secondary: "bg-gray-300 hover:bg-slate-400 border-gray-600 border ",
        default: "bg-slate-400 hover:bg-gray-600 hover:text-white",
      },

      /* button sizes */
      size: {
        small: ["text-sm", "py-1", "px-1.5"],
        medium: ["text-base", "py-3", "px-4"],
        large: ["text-lg", "py-4", "px-8"],
      },

      /* button roundness */
      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
      },
    },

    // defaults
    defaultVariants: {
      intent: "default",
      size: "medium",
      roundness: "round",
    },
  }
);

const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  href,
  target,
  leftIcon,
  intent,
  size,
  roundness,
  className,
  ...props
}) => {
  return (
    <a
      href={href}
      target={target}
      className={cn(buttonVariants({ intent, size, roundness, className }))}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0 pr-2">{leftIcon}</span>}
      {children}
    </a>
  );
};

export default ButtonLink;
