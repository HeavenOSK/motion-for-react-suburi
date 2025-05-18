"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CardProps {
	href: string;
	title: string;
	description?: string;
	icon?: ReactNode;
}

export default function Card({ href, title, description, icon }: CardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.04 }}
			whileTap={{ scale: 0.97 }}
			className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 p-6 shadow-lg backdrop-blur-lg transition-shadow hover:shadow-2xl"
		>
			<Link className="absolute inset-0 z-10" href={href} aria-label={title} />
			<div className="relative z-0 flex items-start gap-4">
				{icon && <div className="text-3xl">{icon}</div>}
				<div>
					<h3 className="font-semibold text-lg text-white leading-snug">
						{title}
					</h3>
					{description && (
						<p className="mt-1 text-sm text-white/80">{description}</p>
					)}
				</div>
			</div>
		</motion.div>
	);
}
