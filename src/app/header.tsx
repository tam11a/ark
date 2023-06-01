import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<nav className="flex flex-row items-center justify-between sm:justify-around p-5 pt-10 pb-12">
			{/* <Image
				src={"/logo_1.svg"}
				width={90}
				height={65}
				alt="Ark."
			/> */}
			<button className="font-semibold text-4xl text-slate-800">Ark.</button>
			<button className="font-semibold text-xl text-slate-800">MENU</button>
		</nav>
	);
};

export default Header;
