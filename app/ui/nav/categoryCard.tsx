'use client';

import { useCategoryStore } from "@/app/lib/store";

type Props = {
	categoryName: string,
}
export function CategoryCard({ categoryName }: Props) {

	const setCategory = useCategoryStore((state) => state.updateCategory);

	return (
		<div
			className="flex items-end border-b-2 mb-2 h-10 cursor-pointer"
			onClick={() => {
				setCategory(categoryName)
			}}
		>
			<p> {categoryName} </p>
		</div>
	)
}
