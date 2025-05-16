export default function Home() {
	return (
		<div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
			<header className="mb-10">
				<h1 className="font-bold text-2xl">Motion for React 素振り</h1>
			</header>
			<main>
				<ul className="space-y-4">
					<li>
						<a
							href="/basic"
							className="flex items-center rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
						>
							Basic
						</a>
					</li>
					<li>
						<a
							href="/button"
							className="flex items-center rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
						>
							Button
						</a>
					</li>
					<li>
						<a
							href="/scroll-in-view"
							className="flex items-center rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
						>
							Scroll in View
						</a>
					</li>
					<li>
						<a
							href="/justify"
							className="flex items-center rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
						>
							Justify
						</a>
					</li>
				</ul>
			</main>
		</div>
	);
}
