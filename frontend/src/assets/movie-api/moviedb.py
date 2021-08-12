import requests;
import json;


IMGPATH = "https://image.tmdb.org/t/p/w1280"

def getMovies():
    APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate"
    moviedb = []
    for i in range(1, 5):
        req = requests.get(url = APIURL, params={"page": i})
        moviedb = moviedb + req.json()["results"]

    for movie in moviedb:
        movie["poster_path"] = IMGPATH + movie["poster_path"] 
    
    return moviedb

def getGenres():
    APIURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US"
    response = requests.get(url=APIURL)
    return response.json()


def getQuerySearch(text):
    APIURL= "https://api.themoviedb.org/3/search/movie?api_key=16a263bd09ca6a7066862930c1523bcc&language=en-US&page=1&include_adult=false"
    moviedb = requests.get(url=APIURL, params={"query": text}).json()["results"]
    for movie in moviedb:
        movie["poster_path"] = IMGPATH + movie["poster_path"] 
    
    return moviedb


if __name__ == "__main__":
    moviedb = getMovies()
    response = json.dumps(moviedb)
    jsonFile = open("moviedata.json", "w")
    jsonFile.write(response)
    jsonFile.close()

    genres = getGenres()
    response =json.dumps(genres)
    print(response)
    jsonFile = open("genres.json", "w+")
    jsonFile.write(response)
    jsonFile.close()