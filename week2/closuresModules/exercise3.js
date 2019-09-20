const SongsManager = function () {
    const songs = {}
    const addSong = function (key, value) {
        songs[key] = value.replace("https://www.youtube.com/watch?v=", "")
    }

    const getSong = function (key) {
        return "https://www.youtube.com/watch?v=" + songs[key]
    }

    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

