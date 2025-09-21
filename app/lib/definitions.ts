export type Categories =
	"Programming" | "Miscellaneous" | "Dark" | "Pun" | "Spooky" | "Christmas";

export type Joke = {
	error: boolean;
	category: string;
	type: "single" | "twopart";
	joke?: string;
	setup?: string;
	delivery?: string;
	flags: {
		nsfw: boolean;
		religious: boolean;
		political: boolean;
		racist: boolean;
		sexist: boolean;
		explicit: boolean;
	};
	id: number;
	safe: boolean;
	lang: string;
}
