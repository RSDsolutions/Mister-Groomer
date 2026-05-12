import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

interface NavLink {
  name: string;
  path: string;
}

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface NavHeaderProps {
  links: NavLink[];
  className?: string;
}

export function NavHeader({ links, className }: NavHeaderProps) {
  const location = useLocation();
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  const isActive = (link: NavLink) =>
    link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path);

  const snapToActive = () => {
    const idx = links.findIndex(isActive);
    if (idx >= 0 && tabRefs.current[idx]) {
      const el = tabRefs.current[idx]!;
      setPosition({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    } else {
      setPosition((pv) => ({ ...pv, opacity: 0 }));
    }
  };

  // Snap cursor to active tab on mount and route changes
  useEffect(() => {
    snapToActive();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <ul
      className={cn(
        "relative flex w-fit rounded-full border border-brand-teal/25 p-1",
        className
      )}
      onMouseLeave={snapToActive}
    >
      {links.map((link, i) => (
        <li
          key={link.path}
          ref={(el) => { tabRefs.current[i] = el; }}
          onMouseEnter={() => {
            const el = tabRefs.current[i];
            if (!el) return;
            setPosition({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
          }}
          className="relative z-10 cursor-pointer"
        >
          <Link
            to={link.path}
            className="block px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-dark-teal whitespace-nowrap select-none transition-colors duration-150"
          >
            {link.name}
          </Link>
        </li>
      ))}

      {/* Sliding cursor pill — brand orange */}
      <motion.li
        animate={{ left: position.left, width: position.width, opacity: position.opacity }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-[3px] bottom-[3px] z-0 rounded-full bg-brand-orange pointer-events-none"
      />
    </ul>
  );
}

export default NavHeader;
