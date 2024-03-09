import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://images.pexels.com/photos/111963/pexels-photo-111963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			title="A First Meetup"
			address="Some street 5, Some City"
			description="This is a first meetup"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: true,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;
	console.log(meetupId);

	return {
		props: {
			meetupData: {
				id: meetupId,
				image: 'https://images.pexels.com/photos/111963/pexels-photo-111963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
				title: 'A First Meetup',
				address: 'Some street 5, Some City',
				description: 'This is a first meetup',
			},
		},
	};
}

export default MeetupDetails;
