// import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";

import { Link } from "react-router-dom";
import DropDown from "./dropDown";
import EditUserData from "./editUserData";

const SideBar = () => {
    const ref = useRef("");

    const [showMenu, setShowMenu] = useState(false);
    const [editUser, setEditUser] = useState(false);

    const handleScroll = (e) => {
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });

        // Update the class name of the clicked link
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };

    function handleClick(e) {
        if (e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }

    return (
        <div className="w-full shadow-navbarShadow h-full  sticky top-0 z-50 bg-bodyColor px-4 ">

            {/* Small Icon section */}



            {!showMenu ? (
                <motion.div
                    key={showMenu}
                    initial={{ x: -20, opacity: [1, 0] }}
                    animate={{ x: 0, opacity: [0, 1] }}
                    transition={{ duration: .5, delay: 1 }}
                    className=" flex flex-col gap-2 top-5 absolute left-3 justify-between z-10 items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
                    onClick={() => setShowMenu(true)}
                >
                    <span className=" w-9 mr-auto bg-forestGreen h-2 rounded-3xl bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                    <span className=" w-14 bg-forestGreen h-2 rounded-3xl bg-textGreen inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                    <span className=" w-9 mr-auto bg-forestGreen h-2 rounded-3xl bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
                </motion.div>

            ) : (
                <motion.div
                    key={showMenu}
                    initial={{ x: -20, opacity: [1, 0] }}
                    animate={{ x: 0, opacity: [0, 1] }}
                    transition={{ duration: .5, delay: .3 }}
                    className="absolute left-0 top-0 w-80 bg-forestGreen h-full z-20"
                    style={{ backgroundColor :editUser &&"#107857"}}
                >
                    {editUser ?
                        (<EditUserData setEditUser={setEditUser}/>) : (
                            <>
                                <div className="w-8 h-8 mt-2 ml-3 cursor-pointer" onClick={() => setShowMenu(false)}>
                                    <IoChevronBackOutline className="w-10 h-12" color="white" />
                                </div>
                                <div className=" flex flex-col justify-evenly items-start pl-6 gap-9 mt-16">
                                    <DropDown onEdit={setEditUser} items={[{ title: "username", value: "Netplanto" }, { title: "phone number", value: "0987654321" }, { title: "email", value: "netplanto@gmail.com" }]} />
                                </div>
                                <IoMdExit className=" absolute bottom-2 left-6 w-14 h-14 cursor-pointer" color="white" />
                            </>
                        )}

                </motion.div>
            )}
        </div>
    );
};

export default SideBar;