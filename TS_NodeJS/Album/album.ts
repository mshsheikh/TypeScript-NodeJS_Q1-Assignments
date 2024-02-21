function
    makeAlbum
    (
        artist: string,
        title: string,
        tracks?: number
    ):
            
    Record <string, any>
    {
        return { artist, title, tracks };
    }

const album1 
        = makeAlbum("Justin Bieber", "My World 2.O", 10);

const album2 
        = makeAlbum("Ed Sheeran and Rudimental", "x (Wembley Edition)", 24);

const album3 
        = makeAlbum("Lady Gaga", "The Fame", 15);


console.log(album1); console.log(album2); console.log(album3);