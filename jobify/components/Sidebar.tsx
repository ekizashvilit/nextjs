'use client';

import links from '@/utils/links';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import Link from 'next/link';
import Logo from '@/assets/logo.svg';

function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className='py-4 px-8 bg-muted h-full'>
			<Image src={Logo} alt='logo' className='mx-auto' />
			<div className='flex flex-col mt-20 gap-y-4'>
				{links.map((link) => {
					return (
						<Button
							asChild
							key={link.href}
							variant={pathname === link.href ? 'default' : 'link'}
						>
							<Link href={link.href} className='flex items-center gap-x-2'>
								{link.icon} <span className='capitalize'>{link.label}</span>
							</Link>
						</Button>
					);
				})}
			</div>
		</aside>
	);
}

export default Sidebar;
