import Image from 'next/image';
import Link from 'next/link';

const DrinksList = ({ drinks }) => {
	return (
		<ul className='grid sm:grid-cols-2 gap-6 mt-6'>
			{drinks.map((drink) => {
				return (
					<li key={drink.id}>
						<Link href={`/drinks/${drink.id}`} className='text-xl font-medium'>
							<div className='relative mb-4 h-48'>
								<Image
									src={drink.download_url}
									fill
									// sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw'
									alt={drink.author}
									className='rounded-md object-cover'
								/>
							</div>
							{drink.author}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default DrinksList;
