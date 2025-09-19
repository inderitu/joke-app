type Props = {
	categoryName: string,
}
export function CategoryCard({ categoryName }: Props) {
	return (
		<div className="flex items-end border-b-2 mb-2 h-10 cursor-pointer">
			<p> {categoryName} </p>
		</div>
	)
}
