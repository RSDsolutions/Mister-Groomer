import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(animationProps as any)}
        {...props}
        className={cn(
          "relative overflow-hidden rounded-full px-8 py-4 font-bold",
          "bg-[#F5A623] hover:bg-[#d9921b]",
          "text-white shadow-lg hover:shadow-xl hover:shadow-[#F5A623]/30",
          "transition-colors duration-300",
          className
        )}
      >
        {/* Shiny text */}
        <span
          className="relative block size-full font-bold tracking-wide text-white"
          style={{
            maskImage:
              "linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), rgba(255,255,255,0.3) calc(var(--x) + 30%), rgba(255,255,255,1) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>

        {/* Shiny border sweep */}
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
            background:
              "linear-gradient(-75deg, rgba(255,255,255,0.04) calc(var(--x)+20%), rgba(255,255,255,0.38) calc(var(--x)+25%), rgba(255,255,255,0.04) calc(var(--x)+100%))",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] p-px"
        />
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
