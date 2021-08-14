from flask import Flask
import requests
from datetime import datetime

IMGPATH = "https://image.tmdb.org/t/p/w1280"

app = Flask(__name__)

def getGenreList():
    APIURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&include_adult=false"
    response = requests.get(url=APIURL).json()["genres"]
    return response

genreList = getGenreList()

def getGenreName(id):
    for obj in genreList:
        if obj["id"] == id:
            return obj["name"]
    
    return ""

def getMovieList(APIURL):
    moviedb = []
    for i in range(1, 3):
        req = requests.get(url = APIURL, params={"page": i})
        moviedb = moviedb + req.json()["results"]
    for movie in moviedb:
        movie["genre_list"] = [getGenreName(id) for id in movie["genre_ids"]]
        if movie["backdrop_path"]:
            movie["backdrop_path"] = IMGPATH + movie["backdrop_path"]
        else:
            movie["backdrop_path"] = "https://image.tmdb.org/t/p/w1280/fwSonK8WrAEqWY7sqjvGRCgzIij.jpg"
        
        if movie["poster_path"]:
            movie["poster_path"] = IMGPATH + movie["poster_path"]
        else:
            movie["poster_path"] = "https://image.tmdb.org/t/p/w1280/fwSonK8WrAEqWY7sqjvGRCgzIij.jpg"
        
    responseObject = {"results": moviedb}
    return responseObject

def getMovie(APIURL):
    req = requests.get(url = APIURL)
    movie = req.json()
    movie["poster_path"] = IMGPATH + movie["poster_path"]
    return movie

@app.route('/popular')
def get_popular():
    APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate"
    return getMovieList(APIURL)

@app.route('/trending')
def get_trending(): 
    APIURL = "https://api.themoviedb.org/3/trending/movie/day?api_key=16a263bd09ca6a7066862930c1523bcc&include_adult=false"
    return getMovieList(APIURL)

@app.route('/new')
def get_nowplaying():
    APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=" + datetime.today().strftime("%Y-%m-%d") + "&with_watch_monetization_types=flatrate"
    return getMovieList(APIURL)

@app.route('/comingsoon')
def get_upcoming(): 
    APIURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&region=AU&include_adult=false"
    return getMovieList(APIURL)

@app.route('/favourites')
def get_topRated():
    APIURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&region=AU&include_adult=false"
    return getMovieList(APIURL)

@app.route('/search/<string:text>')
def getQuerySearch(text):
    print(text)
    APIURL = "https://api.themoviedb.org/3/search/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&query=" + text + "&include_adult=false"
    return getMovieList(APIURL)

@app.route('/genre/<string:genre>')
def getMoviesbyGenre(genre):
    APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=True&page=1&with_genres=" + genre + "&with_watch_monetization_types=flatrate"
    return getMovieList(APIURL)

@app.route('/trailer/<string:movieid>')
def getMovieTrailer(movieid):
    APIURL = "https://api.themoviedb.org/3/movie/"+ str(movieid) + "/videos?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US"
    req = requests.get(url = APIURL)
    if req.json() == None:
        return {"trailer" : ""}

    results = req.json()["results"]
    for result in results:
        if (result["type"] == "Trailer"):
            responseObject = {"trailer" : "https://www.youtube.com/watch?v=" + result["key"]}
            return responseObject
    return {"trailer" : ""}
