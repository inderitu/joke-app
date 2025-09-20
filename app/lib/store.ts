import { create } from 'zustand';

type State = {
	activeCategory: string;
}
type Action = {
	updateCategory: (choosenCategory: State['activeCategory']) => void;
}

export const useCategoryStore = create<State & Action>((set) => ({
	activeCategory: "Programming",
	updateCategory: (choosenCategory) => set(() => (
		{ activeCategory: choosenCategory }
	))
}))
