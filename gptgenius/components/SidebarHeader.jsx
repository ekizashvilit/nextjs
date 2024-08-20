import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

const SidebarHeader = () => {
	return (
		<div className='flex items-center mb-4 gap-4 px-4'>
			<SiOpenaigym className='text-primary w-10 h-10' />
			<h2 className='text-xl font-extrabold text-primary mr-auto'>GPTGenius</h2>
			<ThemeToggle />
		</div>
	);
};

export default SidebarHeader;
