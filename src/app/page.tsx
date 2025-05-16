export default function Home() {
	return (
		<div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
			<header className="mb-10">
				<h1 className="text-2xl font-bold">Motion for React 素振り</h1>
			</header>
			<main>
				<ul className="space-y-4">
					<li>
						<a
							href="/basic"
							className="flex items-center px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
						>
							Basic
						</a>
					</li>
					{/* 今後新しいリンクが追加される場合はここに */}
				</ul>
			</main>
		</div>
	);
}
