'use client';

import { CategoryCard } from '@/app/ui/nav/categoryCard';

export function Nav() {
	/**
	 * object properties
	 * name 
	 * font style
	 */
	const categoryObjArr = [
		{ name: "Programming" },
		{ name: "Miscellaneous" },
		{ name: "Dark" },
		{ name: "Pun" },
		{ name: "Spooky" },
		{ name: "Christmas" },
	];
	return (
		<nav className="flex flex-col w-2/10 p-5">
			<div className="border-2 border-solid mb-2 h-10"> Icon </div>
			{
				categoryObjArr.map((element, index) => {
					return (
						<CategoryCard
							key={index}
							categoryName={element.name}
						/>
					)
				})
			}
		</nav>
	)
}
