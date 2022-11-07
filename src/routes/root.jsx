import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Root = () => {
    const [openMenu, setOpenMenu] = useState(false);
    let location = useLocation();

    useEffect(() => {
        const bg = document.querySelector(".bg");
        location.pathname === "/"
            ? bg.classList.remove("hidden")
            : bg.classList.add("hidden");
    }, [location]);

    useEffect(() => {
        const menu = document.querySelector(".menu");
        const content = document.querySelector("main");

        if (openMenu) {
            menu.classList.remove("hidden");
            return content.classList.add("hidden");
        }
        menu.classList.add("hidden");
        content.classList.remove("hidden");
    }, [openMenu]);

    return (
        <div className="w-full h-screen">
            <div className="bg fixed -z-50 w-full h-full flex justify-center items-center">
                <div className="shape absolute w-60 animate-[spin6_18s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
                <div className="shape absolute w-[17.25rem] animate-[spin12_20s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
                <div className="shape absolute w-[18.75rem] animate-[reversespim6_22s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
                <div className="shape absolute w-[21rem] animate-[reversespin12_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
                <div className="shape absolute w-[22.5rem] animate-[spin6_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
                <div className="shape absolute w-[26.5] animate-[spin12_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
                <div className="shape absolute w-[28rem] animate-[reversespin6_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
            </div>
            <div className="menu fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-5 z-10 hidden">
                <Link
                    to={"/"}
                    className="text-5xl"
                    onClick={() => {
                        setOpenMenu(false);
                    }}
                >
                    Home
                </Link>
                <Link
                    to={"/about"}
                    className="text-5xl"
                    onClick={() => {
                        setOpenMenu(false);
                    }}
                >
                    About
                </Link>
                <Link
                    to={"services"}
                    className="text-5xl"
                    onClick={() => {
                        setOpenMenu(false);
                    }}
                >
                    Services
                </Link>
                <Link
                    to={"/portfolio"}
                    className="text-5xl"
                    onClick={() => {
                        setOpenMenu(false);
                    }}
                >
                    Portfolio
                </Link>
                <Link
                    to={"/review"}
                    className="text-5xl"
                    onClick={() => {
                        setOpenMenu(false);
                    }}
                >
                    Review
                </Link>
                <Link
                    to={"/contact"}
                    className="text-5xl"
                    onClick={() => {
                        setOpenMenu(false);
                    }}
                >
                    Contact
                </Link>
            </div>
            <nav className="fixed top-0 w-full z-20">
                <div className="container grid grid-cols-3 items-center pt-7">
                    <button
                        onClick={() => {
                            openMenu ? setOpenMenu(false) : setOpenMenu(true);
                        }}
                        className="relative w-fit text-xl font-semibold flex items-center select-none"
                    >
                        <div className="hamburger flex flex-col w-9 h-5 justify-between justify-self-start">
                            <div className="h-0.5 bg-slate-50 animate-[shrink_2s_linear_infinite]" />
                            <div className="h-0.5 bg-slate-50 animate-[shrink_2.5s_linear_infinite]" />
                            <div className="h-0.5 bg-[#2EE0D0] animate-[shrink_1.5s_linear_infinite]" />
                        </div>
                    </button>
                    <Link
                        to={"/"}
                        className="text-2xl w-fit h-fit justify-self-center select-none tracking-wide"
                    >
                        Daffa Rafi
                    </Link>
                    <Link
                        to={"/portfolio"}
                        className="text-xl font-semibold w-fit h-fit flex items-center justify-self-end group"
                    >
                        <span className="block h-0 -mr-0.5 border-8 border-transparent border-l-[#2EE0D0] group-hover:animate-[pointbounce_0.5s_ease-out_infinite_alternate] group-hover:border-l-[#FF4444] transition-all duration-300 select-none" />
                        <div className="group-hover:scale-110 transition-all duration-300 select-none">
                            Portfolio{" "}
                            <span className="block h-0.5 w-5 bg-[#2EE0D0] -mt-1 group-hover:bg-[#FF4444] group-hover:animate-[shrink_2s_linear_infinite] transition-all duration-300" />
                        </div>
                    </Link>
                </div>
            </nav>
            <Outlet />
            <div className="undernav fixed bottom-0 w-full z-20">
                <div className="container flex justify-between pb-7">
                    <Link
                        to={"/review"}
                        className="text-xl font-semibold w-fit h-fit flex items-center justify-self-end group"
                    >
                        {" "}
                        <span className="block h-0 -mr-0.5 border-8 border-transparent border-l-[#2EE0D0] group-hover:animate-[pointbounce_0.5s_ease-out_infinite_alternate] group-hover:border-l-[#FF4444] transition-all duration-300 select-none" />
                        <div className="group-hover:scale-110 transition-all duration-300 select-none">
                            Review{" "}
                            <span className="block h-0.5 w-5 bg-[#2EE0D0] -mt-1 group-hover:bg-[#FF4444] group-hover:animate-[shrink_2s_linear_infinite] transition-all duration-300" />
                        </div>
                    </Link>
                    <Link className="text-2xl select-none hidden">★</Link>
                </div>
            </div>
        </div>
    );
};

export default Root;
