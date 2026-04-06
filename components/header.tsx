import React, { useEffect, useRef } from "react";
import Magentic from "./ui/magentic";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";
import { cn } from "@/lib/utils";
import { links } from "@/data/data";
import "@/app/header.css";

const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

type HeaderProps = {
  color: "Dark" | "Light";
  className?: string;
  mode?: "hamburger" | "cross";
};

function W3MLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1001 1001"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="W3M logo"
    >
      <g className="logo__rotate" fill="currentColor" stroke="none">
        <path d="M474 .6c-2.5.2-10.1.8-17 1.4-75.4 6.3-151.2 31.2-216.8 71.2-35.3 21.5-62.6 43.2-93.2 73.8s-52.3 57.9-73.8 93.2C33.2 305.8 10 376.2 1.8 457c-1.7 16.3-1.7 70.7 0 87 8.2 80.8 31.4 151.2 71.4 216.8 21.5 35.3 43.2 62.6 73.8 93.2s57.9 52.3 93.2 73.8c65.6 40 136 63.2 216.8 71.4 16.3 1.7 70.7 1.7 87 0 80.8-8.2 151.2-31.4 216.8-71.4 35.3-21.5 62.6-43.2 93.2-73.8s52.3-57.9 73.8-93.2c35.3-57.9 58.7-123.1 68.1-189.8 3.8-26.9 4.6-39.1 4.6-70.5s-.8-43.6-4.6-70.5c-9.4-66.7-32.8-131.9-68.1-189.8-21.5-35.3-43.2-62.6-73.8-93.2s-57.9-52.3-93.2-73.8C696.6 34.1 626.7 10.6 549.5 2.4 536.4 1 484-.3 474 .6m76.5 60.9C627.7 70.4 695 96.6 757 141.7c18.7 13.6 30.7 24 48.5 41.8 71 70.9 114.5 161.1 127.1 263 2.1 17.6 3 65.6 1.5 85.5-2.9 37.2-8.5 66.6-19.3 100-22.9 71-58.4 128.5-110.9 179.5-21 20.4-38.7 34.6-63.4 50.7-34.7 22.7-64.8 37.3-104 50.3-87.5 29.2-176.8 29.5-266 .8-68.9-22.2-138.2-66.6-186.1-119.3-29.9-32.9-49.5-61-67.8-97-25-49.3-39.5-98.6-45.2-153.5-2.5-23.4-2.5-70.1 0-90.5 6.5-54.6 18.6-98.2 40.5-146 34.9-76 95.8-143.4 169.1-187.3C338.4 85.4 402.6 65.4 472 60c16.7-1.3 62-.4 78.5 1.5" />
        <path d="M476.5 115.6c-63.8 5.1-120.8 23.6-173 56.1C246.7 207.1 201.1 256.8 171 316l-7 13.8 8.4 18.9c7.9 17.7 40.3 88.9 69.2 152 7.1 15.5 13.2 28.2 13.5 28.3.3 0 2.7-4.6 5.4-10.3 2.7-5.6 18.1-37 34.2-69.7 16.2-32.7 35.5-72 43-87.3l13.6-27.7h271.9l-3.2 5.7c-2.9 5.1-65.5 111.4-86.2 146.3l-7.4 12.5 5.9.3c3.2.1 7.9.7 10.4 1.2 2.5.6 4.7.9 4.8.8.2-.2 10-17 21.7-37.3 11.8-20.4 29.6-51 39.4-68 9.9-17.1 21.8-37.6 26.5-45.7 4.6-8.1 8.6-14.8 8.9-14.7.3 0 10.6 15.1 23 33.6 33.5 50.2 75.9 112.6 77.4 114.2 1.2 1.1 1.6 1 2.6-.9 1.6-2.9 58.3-91.3 79.2-123.3 9.2-14.3 16.8-26.3 16.8-26.8s-3.2-6.9-7.1-14.2c-40.3-74.7-94.6-128.3-165.4-163.2-40.5-20-80-31.8-124-37-13.3-1.6-58.5-2.8-70-1.9" />
        <path d="M384.7 394.7c-1.5 5.6-123.9 279.7-125.6 281.6-.4.4-2.8-3.6-5.3-9s-12-25.3-21.1-44.3c-30.3-63.2-63.1-132.1-79.2-166.2-18.3-38.6-16.3-37.5-19.1-10.5-2 20.5-1.5 65.4 1 83.2 9.3 65.3 32.3 122.2 69.9 172.9 48.6 65.3 118.2 113.1 197.3 135.6 103.3 29.4 214.4 11.5 304.9-49 37.5-25.1 73.5-60.7 98.7-97.5 34.7-50.6 55-104.2 62.5-164.5 2.7-22.1 2.4-66.8-.5-88.9-1.2-9.1-2.4-16.6-2.6-16.8-.4-.5-10.9 16.2-66.6 105.7-23.7 38.2-43.8 70.5-44.6 71.7-1.4 2.2-3.6-1-51.8-73-27.6-41.3-50.7-75.1-51.1-75.1-.5.1-11.2 18.1-23.7 39.9l-22.7 39.8 4.8 5.6c16.7 19.3 27.3 40.3 31.8 62.8 2 10.3 2.2 32.3.4 42.3-8.4 46-41.2 85.9-85.4 104-52.5 21.4-112.5 9.9-154.9-29.9-14.9-14-22.6-24.8-39.6-55.6-6-11-13.3-24-16.1-28.8-2.8-4.9-5.1-9.3-5.1-9.8s13.5-.9 32.9-.9h32.9l3.5 6.2c1.8 3.5 7 12.8 11.3 20.8 7 12.7 9 15.5 16.9 23.5 5.8 5.7 12 10.8 17.2 13.9 46.9 27.8 106.9 6.6 124.6-44.2 3.9-11.1 4.9-28.5 2.3-39.7-5.8-24.8-25-44.8-50.6-52.8-6-1.9-9.9-2.1-51.2-2.6l-44.7-.6 10.1-17.5c5.5-9.6 23.9-42.3 41-72.5 17.1-30.3 31.9-56.5 33-58.3l2-3.2h-68.5c-64.4 0-68.5.1-69 1.7" />
      </g>
    </svg>
  );
}

export function Header({ color, className, mode = "hamburger" }: HeaderProps) {
  const logoAnimationTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    logoAnimationTl.current = gsap.timeline({ paused: true }).fromTo(
      `.logo__rotate`,
      {
        rotate: 0,
        transformOrigin: "center",
      },
      {
        rotate: -360,
        transformOrigin: "center",
        duration: 0.6,
        ease: ease,
      },
    );

    return () => {
      logoAnimationTl.current?.kill();
    };
  }, []);

  const dispatch = useAppDispatch();

  return (
    <header className={cn("nav__container anime px-paddingX", className)}>
      <nav className="nav__bar ">
        <div className="max-w-maxWidth">
          <Magentic
            href={links.home}
            strength={50}
            className={`nav__item text-xl font-bold text-color${color} before:bg-color${color}`}
            onMouseEnter={() => {
              logoAnimationTl.current?.play();
            }}
            onMouseLeave={() => {
              logoAnimationTl.current?.reverse();
            }}
          >
            <p className="mask logo__anim flex items-center justify-center gap-2 font-semibold">
              <span className="text-[18px] font-semibold leading-none tracking-[-0.04em]">
                W3M
              </span>

              <W3MLogoIcon className="h-[40px] w-[40px] shrink-0" />
            </p>
          </Magentic>

          <Magentic
            strength={50}
            className={`mask nav__item h-8 w-8 cursor-pointer items-center text-color${color} before:bg-color${color}`}
            onClick={() => {
              if (mode === "cross") {
                dispatch(toggleMenu({ isMenuOpen: false }));
              } else {
                dispatch(toggleMenu({ isMenuOpen: true, color: color }));
              }
            }}
          >
            <div
              className={cn(
                "flex h-[0.9rem] w-full flex-col justify-between ",
                {
                  "scale-[.90] justify-center": mode === "cross",
                },
              )}
            >
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute rotate-45": mode === "cross",
                })}
              ></div>
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute -rotate-45": mode === "cross",
                })}
              ></div>
            </div>
          </Magentic>
        </div>
      </nav>
    </header>
  );
}
