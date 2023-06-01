"use client";
import { Icon } from "@iconify/react";
import React, { CSSProperties } from "react";

const RoundText: React.FC<{
	children?: React.ReactNode;
	className?: string;
	textClassName?: string;
	icon?: React.ReactNode;
	style?: CSSProperties;
}> = ({ children, textClassName, icon, style, className }) => {
	return (
		<div
			className={`bg-slate-100 border-slate-900 border font-bold tracking-[0.07em] text-sm h-fit w-fit rounded-full cursor-pointer hover:!scale-90 transition duration-300 absolute ${className}`}
			style={style}
		>
			<style jsx>
				{`
					#rotatingText {
						animation-name: rotate-circle;
						animation-duration: 12s;
						animation-timing-function: linear;
						animation-iteration-count: infinite;
						color: #ffffff;
					}

					@keyframes rotate-circle {
						to {
							transform: rotate(1turn);
						}
					}
				`}
			</style>
			<svg
				id="rotatingText"
				viewBox="0 0 170 170"
				width="170"
				height="170"
			>
				<defs>
					<path
						id="circle"
						d="M 85, 85
                    m -75, 0
                    a 75, 75 0 1, 0 150, 0
                    a 75, 75 0 1, 0 -150, 0
                    "
					></path>
				</defs>
				<text width="400">
					<textPath
						alignmentBaseline="baseline"
						xlinkHref="#circle"
						className={"roundText font-serif" + textClassName}
					>
						{children || (
							<>
								&bull; Defined Solution &bull; Explore Projects 🔎 &bull;
								Explore Works
							</>
						)}
					</textPath>
				</text>
			</svg>
			<div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-slate-900 p-8 rounded-full rotate-45">
				{icon || (
					<Icon
						icon={"guidance:up-arrow"}
						className="stroke-2"
					/>
				)}
			</div>
		</div>
	);
};

export default RoundText;
