'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
	createAndEditJobSchema,
	CreateAndEditJobType,
	JobMode,
	JobStatus,
} from '@/utils/types';
import { useForm } from 'react-hook-form';
import { Form } from './ui/form';
import { CustomFormField, CustomFormSelect } from './FormComponents';
import { Button } from './ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from './ui/use-toast';
import { createJobAction } from '@/utils/actions';
import { redirect, useRouter } from 'next/navigation';

function CreateJobForm() {
	const form = useForm<CreateAndEditJobType>({
		resolver: zodResolver(createAndEditJobSchema),
		defaultValues: {
			company: '',
			position: '',
			location: '',
			status: JobStatus.Pending,
			mode: JobMode.FullTime,
		},
	});

	const queryClient = useQueryClient();
	const { toast } = useToast();
	const router = useRouter();
	const { mutate, isPending } = useMutation({
		mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
		onSuccess: (data) => {
			if (!data) {
				toast({ description: 'there was an error' });
				return;
			}
			toast({ description: 'job created' });
			queryClient.invalidateQueries({ queryKey: ['jobs'] });
			queryClient.invalidateQueries({ queryKey: ['stats'] });
			queryClient.invalidateQueries({ queryKey: ['charts'] });

			router.push('/jobs');
		},
	});

	function onSubmit(values: CreateAndEditJobType) {
		mutate(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='bg-muted p-8 rounded'
			>
				<h2 className='capitalize font-semibold text-4xl mb-6'>add job</h2>
				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
					<CustomFormField control={form.control} name='position' />
					<CustomFormField control={form.control} name='company' />
					<CustomFormField control={form.control} name='location' />
					<CustomFormSelect
						control={form.control}
						name='status'
						labelText='job status'
						items={Object.values(JobStatus)}
					/>
					<CustomFormSelect
						control={form.control}
						name='mode'
						labelText='job mode'
						items={Object.values(JobMode)}
					/>
					<Button
						type='submit'
						className='self-end capitalize'
						disabled={isPending}
					>
						{isPending ? 'loading' : 'create job'}
					</Button>
				</div>
			</form>
		</Form>
	);
}

export default CreateJobForm;
