import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image: 'https://images.pexels.com/photos/111963/pexels-photo-111963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		address: 'Some address5, 12345 Some City',
		description: 'This is a first meetup!',
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image: 'https://images.pexels.com/photos/111963/pexels-photo-111963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		address: 'Some address5, 12345 Some City',
		description: 'This is a second meetup!',
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
	// fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 1,
	};
}

export default HomePage;
