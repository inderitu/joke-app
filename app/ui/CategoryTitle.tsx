'use client';
import { useCategoryStore } from '@/app/lib/store';

export default function CategoryTitle() {
	const category = useCategoryStore((state) => state.activeCategory);
	return (
		<div
			className="border-solid border-2 mb-2 h-10"
		>
			<h1> {category} Jokes </h1>

		</div>
	)
}
