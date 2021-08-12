from flask import Flask
import requests;
import json;

IMGPATH = "https://image.tmdb.org/t/p/w1280"


app = Flask(__name__)

@app.route('/goats')
def get_goats():
    APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate"
    moviedb = []
    for i in range(1, 13):
        req = requests.get(url = APIURL, params={"page": i})
        moviedb = moviedb + req.json()["results"]

    for movie in moviedb:
        movie["poster_path"] = IMGPATH + movie["poster_path"] 

    responseObject = {"results": moviedb}
    return responseObject

@app.route('/genres')
def get_genres():
    APIURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US"
    response = requests.get(url=APIURL)
    return response

@app.route('/search/<string:text>')
def getQuerySearch(text):
    APIURL= "https://api.themoviedb.org/3/search/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&query=" + text + "&page=1&include_adult=false"
    moviedb = requests.get(url=APIURL, params={"query": text}).json()["results"]
    for movie in moviedb:
        if (movie["poster_path"]):
            movie["poster_path"] = IMGPATH + movie["poster_path"] 
        
    responseObject = {"results": moviedb}
    return responseObject