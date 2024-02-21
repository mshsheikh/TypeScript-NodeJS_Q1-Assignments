function makeAlbum(artist, title, tracks) {
    return { artist: artist, title: title, tracks: tracks };
}
var album1 = makeAlbum("Justin Bieber", "My World 2.O", 10);
var album2 = makeAlbum("Ed Sheeran and Rudimental", "x (Wembley Edition)", 24);
var album3 = makeAlbum("Lady Gaga", "The Fame", 15);
console.log(album1);
console.log(album2);
console.log(album3);
