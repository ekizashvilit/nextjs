// components/SingleDrinksPage.js

import Link from 'next/link';
import Image from 'next/image';

const getSingleDrink = async (id) => {
	const res = await fetch(`https://picsum.photos/id/${id}/info`);
	if (!res.ok) {
		throw new Error('cant fetch single drink');
	}

	return res.json();
};

const SingleDrinksPage = async ({ params }) => {
	const data = await getSingleDrink(params.id);

	return (
		<div>
			<Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
				back to drinks
			</Link>
			<h3>{data.author}</h3>
			<Image
				alt={data.author}
				src={data.download_url}
				width={300}
				height={300}
				className='rounded-lg w-48 h-48 shadow-lg mb-4 object-cover'
				priority
			/>
		</div>
	);
};

export default SingleDrinksPage;
