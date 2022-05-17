const useFont = (pathname) => {
    const styles= {
        '/': {fontFamily: "'IBM Plex Mono', monospace"},
        '/Miscellaneous': {fontFamily: "'Love Ya Like A Sister', cursive"},
        '/Dark': {fontFamily: "'Rubik Wet Paint', cursive"},
        '/Pun' : {fontFamily: "'Lakki Reddy', cursive"},
        '/Christmas': {fontFamily: "'Mountains of Christmas', cursive"},
        '/Spooky': {fontFamily: "'Creepster', cursive"}
    }

   return styles[pathname]
}
 
export default useFont;
