import Link from 'next/link';

function NewsPage() {
	return (
		<>
			<h1>The Detail Page</h1>
			<ul>
				<li>
					<Link href="/news/next-is-a-great-framework">NextJS is a Great Framework</Link>
				</li>
				<li>
					<Link href="/news/sometrhing-else">Something else</Link>
				</li>
			</ul>
		</>
	);
}

export default NewsPage;
