'use client';

type Props = {
	categoryName: string,
}
export function CategoryCard({ categoryName }: Props) {

	/**
	 * onclick  set category
	 * trigger function to fetch jokes
	 * implement partial render of only the jokes container
	 */
	const setCategory = (category: string) => {
		alert(category);
	}
	return (
		<div
			className="flex items-end border-b-2 mb-2 h-10 cursor-pointer"
			onClick={() => alert(categoryName)}
		>
			<p> {categoryName} </p>
		</div>
	)
}
