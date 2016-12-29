# FriendDiagram

# Contributing:
Per Ohrstrom : @perohrstrom,
Edwin Carbajal: @edwincarbajal,
Neel Gupta: @neelgupta2,
Logan Graves: @thomaslogangraves

A Rails-React web app which utilizes the Devise, Geolocator and Rails-react gems. Using the coordinates of two users, FrienDiagram will identify the midpoint and populate a Google Map component with local venues to choose from. Users can can schedule events and decide on a venue in seconds.


```
git clone https://github.com/perohrstrom/FrienDiagram.git
cd FrienDiagram

bundle install
rails db:create
rails db:migrate
rails db:seed (if desired)

rails s
```
open web browser and visit localhost:3000
