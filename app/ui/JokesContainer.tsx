import { Suspense } from 'react';
import JokeCard from './JokeCard';

export default function JokesContainer() {
	return (
		<div
			className="border-solid border-2 mb-2 min-h-3/5"
		>
			<Suspense fallback={<div> Loading...</div>}>
				<JokeCard />
			</Suspense>
		</div>
	)
}
