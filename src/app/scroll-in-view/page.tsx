"use client";

import { motion } from "motion/react";

function ScrollInView() {
	return (
		<div className="flex h-screen w-screen flex-col items-center gap-36 overflow-y-auto p-16">
			{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
				<motion.div
					key={i}
					initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
					whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
					transition={{ duration: 2 }}
				>
					<div className="h-24 w-24" />
				</motion.div>
			))}
		</div>
	);
}

export default ScrollInView;
