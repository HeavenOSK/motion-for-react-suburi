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
			className="backdrop-blur-lg bg-white/5 border border-white/20 hover:shadow-2xl overflow-hidden p-6 relative rounded-xl shadow-lg transition-shadow"
		>
			<Link
				className="absolute inset-0 z-10"
				href={href}
				aria-label={title}
			/>
			<div className="relative z-0 flex items-start gap-4">
				{icon && <div className="text-3xl">{icon}</div>}
				<div>
					<h3 className="text-lg font-semibold leading-snug text-white">
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