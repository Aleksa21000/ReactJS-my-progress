import { useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Header from '../Header.jsx';
import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
	const [isDeleting, setIsDeleting] = useState(false);

	const navigate = useNavigate();
	const params = useParams();

	const {
		data,
		isPending: isEventPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['events', params.id],
		queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
	});

	const {
		mutate,
		isPending: isDeletePending,
		isError: isDeleteError,
		error: deleteError,
	} = useMutation({
		mutationFn: deleteEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['events'],
				refetchType: 'none',
			});
			navigate('/events');
		},
	});

	const startDeleteHandler = () => {
		setIsDeleting(true);
	};

	const stopDeleteHandler = () => {
		setIsDeleting(false);
	};

	const deleteHandler = () => {
		mutate({ id: params.id });
	};

	let content;

	if (isEventPending) {
		content = (
			<div
				id="event-details-content"
				className="center">
				<p> Fetching event data...</p>
			</div>
		);
	}

	if (isError) {
		content = (
			<div
				id="event-details-content"
				className="center">
				<ErrorBlock
					title="Failed to load event"
					message={error.info?.message || 'Try again later.'}
				/>
			</div>
		);
	}

	if (data) {
		content = (
			<>
				<header>
					<h1>{data.title}</h1>
					<nav>
						<button onClick={startDeleteHandler}>Delete</button>
						<Link to="edit">Edit</Link>
					</nav>
				</header>
				<div id="event-details-content">
					<img
						src={`http://localhost:3000/${data.image}`}
						alt={data.title}
					/>
					<div id="event-details-info">
						<div>
							<p id="event-details-location">{data.location}</p>
							<time dateTime={`Todo-DateT$Todo-Time`}>
								{data.date} @ {data.time}
							</time>
						</div>
						<p id="event-details-description">{data.description}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			{isDeleting && (
				<Modal onClose={stopDeleteHandler}>
					<h2>Are you sure?</h2>
					<p>This action cant be undone.</p>
					<div className="form-actions">
						{isDeletePending && <p>Deleting, please wait...</p>}
						{!isDeletePending && (
							<>
								<button
									onClick={stopDeleteHandler}
									className="button-text">
									Cancel
								</button>
								<button
									onClick={deleteHandler}
									className="button">
									Delete
								</button>
							</>
						)}
					</div>
					{isDeleteError && (
						<ErrorBlock
							title="Failed to delete event"
							message={deleteError.info?.message || 'Try again later.'}
						/>
					)}
				</Modal>
			)}
			<Outlet />
			<Header>
				<Link
					to="/events"
					className="nav-item">
					View all Events
				</Link>
			</Header>
			<article id="event-details">{content}</article>
		</>
	);
}
