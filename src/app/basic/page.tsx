"use client";

import { motion } from "motion/react";

function Basic() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
			<motion.div animate={{ x: 100 }}>
				<div className="h-24 w-24 bg-red-500" />
			</motion.div>
		</div>
	);
}

export default Basic;
