var filmes = ["https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjI3MDMxNzcxNl5BMl5BanBnXkFtZTgwODc4MzkwOTE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg"];

var nomeFilmes = ["Como se fosse a primeira vez", "The Walking Dead", "O protetor", "Como eu era antes de você", "A cabana", "A Velha guarda"];

var trailer = ["https://www.imdb.com/video/vi850657561?",  "https://www.imdb.com/video/vi1443873049?playlistId=tt1520211",  "https://www.imdb.com/video/vi1649060889?",  "https://www.imdb.com/video/vi2845815833?",  "https://www.imdb.com/video/vi113292825?playlistId=tt2872518",  "https://www.imdb.com/video/vi1193131545?playlistId=tt7556122"];




 
    for ( var i = _0; i < filmes.length; i++) {
    document.write ("<img src=" + filmes[i]  + ">" + "<p>" + nomeFilmes[i] + "</p>" + "<a href=" + trailer[i] + ">");
     
} 
