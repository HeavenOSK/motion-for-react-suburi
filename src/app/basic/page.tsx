"use client";

import { motion } from "motion/react";

function Basic() {
	return (
		<div className="flex h-screen w-screen flex-col items-center gap-36 overflow-y-auto p-16">
			{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
				<motion.div
					key={i}
					initial={false}
					animate={{ scale: 1 }}
					transition={{ duration: 2 }}
				>
					<div className="h-24 w-24 bg-red-500" />
				</motion.div>
			))}
		</div>
	);
}

export default Basic;
