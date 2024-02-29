function useFont(category: string): { fontFamily: string } {

    const styles: { [key: string]: { fontFamily: string } } = {
        Programming: { fontFamily: "'IBM Plex Mono', monospace" },
        Miscellaneous: { fontFamily: "'Love Ya Like A Sister', cursive" },
        Dark: { fontFamily: "'Rubik Wet Paint', cursive" },
        Pun: { fontFamily: "'Lakki Reddy', cursive" },
        Christmas: { fontFamily: "'Mountains of Christmas', cursive" },
        Spooky: { fontFamily: "'Creepster', cursive" }
    }

    return styles[category];
}

export default useFont;