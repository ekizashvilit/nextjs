import DrinksList from '@/components/DrinksList';

const DrinksPage = async () => {
	const response = await fetch('https://picsum.photos/v2/list');
	if (!response.ok) {
		throw new Error('cant fetch drinks');
	}

	const data = await response.json();

	return (
		<div>
			<DrinksList drinks={data} />
		</div>
	);
};

export default DrinksPage;
