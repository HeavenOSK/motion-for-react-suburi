import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white/5 px-6 py-3 backdrop-blur-lg">
			<Link href="/" className="font-semibold text-white">
				Motion React Demo
			</Link>
			<a
				href="https://github.com/HeavenOSK/motion-for-react-suburi"
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm text-white/70 hover:text-white"
			>
				GitHub ↗
			</a>
		</nav>
	);
}