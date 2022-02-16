# Puddle Jumper!

Deployed Site [here](https://friendly-austin-935131.netlify.app/)

Easy to use adventure itinerary creator

## Description

I am building an adventure planning app.  It will be a simple app that allows users to build a travel/adventure itinerary.  They will also be able to search a database of interesting places to get ideas.  
![Screen Shot 2022-02-16 at 10 43 26 AM](https://user-images.githubusercontent.com/96032956/154330091-f1cc24e4-8ea8-49aa-9b27-b0305e9b169c.png)



##Wireframes
![Screen Shot 2022-02-10 at 9 29 26 AM](https://user-images.githubusercontent.com/96032956/153465813-6cf44fe2-5b9d-4f3b-a854-58acc7c13f6d.png)
![Screen Shot 2022-02-10 at 9 28 55 AM](https://user-images.githubusercontent.com/96032956/153465816-3abcd14f-83a2-40a4-88e4-4e781537b57c.png)
![Screen Shot 2022-02-10 at 9 27 41 AM](https://user-images.githubusercontent.com/96032956/153465819-d454508b-19e9-4ef1-bb02-93e2639b7584.png)
![Screen Shot 2022-02-10 at 9 27 08 AM](https://user-images.githubusercontent.com/96032956/153465820-11eb446f-212a-474f-85e5-fedc79e5b664.png)
![Screen Shot 2022-02-10 at 9 25 41 AM](https://user-images.githubusercontent.com/96032956/153465821-f6166b76-3612-450c-93d2-3e6f375af25f.png)
![Screen Shot 2022-02-10 at 9 25 35 AM](https://user-images.githubusercontent.com/96032956/153465824-64171249-a887-4a0d-bb6d-14fb31a173e8.png)
![Screen Shot 2022-02-10 at 9 23 40 AM](https://user-images.githubusercontent.com/96032956/153465826-44d25d89-1b62-4047-a9c9-eea34a55a7f7.png)








### MVP User Stories

-As a user, I want to be able to create a trip itinerary with multiple stops
    -As a user, I want to see all of my created trips in a list.
     -As a user, I would like to see details of the trip when I click on it.
     -As a user, I want to search for interesting stops near the area I’m planning to travel to.
     -As a user, I want to see details about the searched locations when I click on them.

### Stretch Goal User Stories
 -As a user, I would like to click and drag stops to reorder them.
    -As a user, I would like to login to my personal profile so that all my trips are displayed to just me.
    -As a user, I want to be able to search for locations while I’m creating my itinerary, and add the location as a stop.

## API
OpenTripMap API


Response I get with my api key:

{
"xid": "N5085822235",
"name": "Brass Etching Colorado State Capitol",
"address": {
"city": "Denver",
"road": "East Colfax Avenue",
"house": "State Capitol Building",
"state": "Colorado",
"county": "Denver County",
"country": "United States of America",
"postcode": "80203",
"country_code": "us",
"house_number": "200",
"neighbourhood": "Capitol Hill"
},
"rate": "3h",
"osm": "node/5085822235",
"wikidata": "Q1111402",
"kinds": "urban_environment,cultural,interesting_places,installation",
"sources": {
"geometry": "osm",
"attributes": [
"osm",
"wikidata"
]
},
"otm": "https://opentripmap.com/en/card/N5085822235",
"wikipedia": "https://en.wikipedia.org/wiki/Colorado%20State%20Capitol",
"image": "https://commons.wikimedia.org/wiki/File:Denver_Capitol.jpg",
"preview": {
"source": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Denver_Capitol.jpg/400px-Denver_Capitol.jpg",
"height": 300,
"width": 400
},
"wikipedia_extracts": {
"title": "en:Colorado State Capitol",
"text": "The Colorado State Capitol Building, located at 200 East Colfax Avenue in Denver, Colorado, United States, is the home of the Colorado General Assembly and the offices of the Governor of Colorado and Lieutenant Governor of Colorado. The building is intentionally reminiscent of the United States Capitol. Designed by Elijah E. Myers, it was constructed in the 1890s from Colorado white granite, and opened for use in November 1894. The distinctive gold dome consists of real gold leaf, first added in 1908, commemorating the Colorado Gold Rush. The building is part of Denver's Civic Center area. It was listed on the National Register of Historic Places as part of the Civic Center Historic District in 1974, and became part of the Denver Civic Center National Historic Landmark District in 2012.",
"html": "<p>The <b>Colorado State Capitol Building</b>, located at 200 East Colfax Avenue in Denver, Colorado, United States, is the home of the Colorado General Assembly and the offices of the Governor of Colorado and Lieutenant Governor of Colorado. The building is intentionally reminiscent of the United States Capitol. Designed by Elijah E. Myers, it was constructed in the 1890s from Colorado white granite, and opened for use in November 1894. The distinctive gold dome consists of real gold leaf, first added in 1908, commemorating the Colorado Gold Rush. The building is part of Denver's Civic Center area. It was listed on the National Register of Historic Places as part of the Civic Center Historic District in 1974, and became part of the Denver Civic Center National Historic Landmark District in 2012.</p>"
},
"point": {
"lon": -104.984673,
"lat": 39.739235
}
}



## Component Hierarchy
![Screen Shot 2022-02-10 at 10 29 45 AM](https://user-images.githubusercontent.com/96032956/153465878-4f690d19-fb89-4760-ad55-a473706c3133.png)



