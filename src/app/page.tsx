import Image from "next/image";
import RoundText from "./roundText";

export default function Home() {
	return (
		<>
			{/* HERO SECTION */}
			<section className="flex flex-col gap-4 mx-auto w-fit text-center items-center md:items-start">
				<h1 className="flex flex-row items-center text-3xl sm:text-5xl lg:text-6xl xl:text-[6rem] tracking-tight font-serif font-semibold gap-5">
					Elevate Your Business{" "}
					<Image
						src={"/assets/3d.jpg"}
						width={640}
						height={460}
						alt=""
						className="hidden md:inline-block max-h-[13vh] xl:max-h-[20vh] max-w-[25vw] object-cover shadow-md shadow-slate-400 object-center  rounded-full ml-3 -mb-3"
						priority
					/>
				</h1>
				<h1 className="flex flex-row relative items-center text-3xl sm:text-5xl lg:text-6xl xl:text-[6rem] tracking-tight font-serif font-semibold gap-5">
					with Cutting-edge Printing{" "}
					<RoundText className="hidden sm:inline-block right-0 translate-x-[100%] lg:translate-x-[120%] scale-75 lg:scale-100">
						Transforming Ideas into Stunning Reality
					</RoundText>
				</h1>
				<h1 className="flex flex-row items-center text-3xl sm:text-5xl lg:text-6xl xl:text-[6rem] tracking-tight font-serif font-semibold gap-5">
					&amp;{" "}
					<Image
						src={"/assets/palette.jpg"}
						width={640}
						height={460}
						alt=""
						className="hidden md:inline-block max-h-[13vh] xl:max-h-[20vh] max-w-[30vw] object-cover shadow-md shadow-slate-400 object-center  rounded-full mt-4"
						priority
					/>
					Design Services.
				</h1>
			</section>
			{/* MARQUEE */}
			<div className="marquee-container mt-32">
				<div className="marquee-boxs rotate-3">
					Offset Printing &bull; Large Digital Printing &bull; 3D Signboard &
					Signage &bull; Display Stands &bull; Event Stands &bull; Hording and
					Fencing &bull; Vehicle Branding &bull; Acrylic & Wooden Display &bull;
				</div>
				<div className="marquee-boxs -rotate-3">
					Hording and Fencing &bull; Trophy & Gift Items &bull; Event Stands
					&bull; 3D Signboard & Signage &bull; Uniforms &bull; Display Stands
					&bull; Large Digital Printing &bull;
				</div>
			</div>
		</>
	);
}
