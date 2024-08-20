import JobsList from '@/components/JobsList';
import SearchForm from '@/components/SearchForm';
import { getAllJobsAction } from '@/utils/actions';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';

async function JobPage() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['jobs', '', 'all', 1],
		queryFn: () => getAllJobsAction({}),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SearchForm />
			<JobsList />
		</HydrationBoundary>
	);
}

export default JobPage;
