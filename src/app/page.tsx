import Card from "@/components/Card";

const DEMOS = [
	{
		href: "/basic",
		title: "Basic",
		description: "Simple scale animation examples.",
		icon: "📦",
	},
	{
		href: "/button",
		title: "Button",
		description: "Interactive button with hover/tap states.",
		icon: "🖱️",
	},
	{
		href: "/scroll-in-view",
		title: "Scroll in View",
		description: "Animate elements when they enter the viewport.",
		icon: "📜",
	},
	{
		href: "/justify",
		title: "Justify",
		description: "Layout animations using spring transitions.",
		icon: "↔️",
	},
];

export default function Home() {
	return (
		<div className="relative min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-900 font-[family-name:var(--font-geist-sans)] text-white">
			{/* Decorative grid pattern overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] pointer-events-none [background-size:40px_40px]" />

			<div className="relative z-10 mx-auto max-w-4xl px-6 py-24">
				<header className="mb-16 text-center">
					<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
						Motion for React Demo
					</h1>
					<p className="mt-6 text-lg text-white/80">
						Explore interactive examples powered by Motion&nbsp;One and Tailwind&nbsp;CSS.
					</p>
				</header>

				<main>
					<div className="grid gap-6 sm:grid-cols-2">
						{DEMOS.map((demo) => (
							<Card key={demo.href} {...demo} />
						))}
					</div>
				</main>
			</div>
		</div>
	);
}
