"use client";

import { motion } from "motion/react";

function ButtonExample() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center">
			<motion.button
				className="h-36 w-36 rounded-2xl bg-purple-500"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				onHoverStart={() => console.log("hover started!")}
			>
				hello
			</motion.button>
		</div>
	);
}

export default ButtonExample;
