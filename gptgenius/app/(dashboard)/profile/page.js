import { fetchUserTokensByID } from '@/utils/actions';
import { UserProfile } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

const ProfilePage = async () => {
	const { userId } = auth();
	const currentTokens = await fetchUserTokensByID(userId);

	return (
		<div>
			<h2 className='mb-8 ml-8 text-xl font-extrabold capitalize'>
				token amount: {currentTokens}
			</h2>
			<UserProfile routing='hash' />
		</div>
	);
};

export default ProfilePage;
