import Link from 'next/link';

const HomePage = () => {
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-6xl font-bold text-primary'>GPTGenius</h1>
					<p className='py-6 text-lg leading-loose'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae
						suscipit nesciunt dicta pariatur. Voluptatem.
					</p>
					<Link href={'/chat'} className='btn btn-secondary'>
						get started
					</Link>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
