"use client";

import { motion } from "motion/react";
import { useState } from "react";

function Justify() {
	const [isOn, setIsOn] = useState(false);
	function handleClick() {
		setIsOn(!isOn);
	}
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<button
				type="button"
				className="flex h-24 w-64 cursor-pointer items-center bg-amber-100 p-3"
				style={{
					justifyContent: `flex-${isOn ? "start" : "end"}`,
				}}
				onClick={handleClick}
			>
				<motion.div
					className="h-full w-1/3 rounded-sm bg-amber-400"
					layout
					transition={{
						type: "spring",
						visualDuration: 0.2,
						bounce: 0.2,
					}}
				/>
			</button>
		</div>
	);
}

export default Justify;
