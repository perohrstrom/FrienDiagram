# FriendDiagram

# Contributing:
Per Ohrstrom : @perohrstrom,
Edwin Carbajal: @edwincarbajal,
Neel Gupta: @neelgupta2,
Logan Graves: @thomaslogangraves

A Rails-React web app which utilizes the Devise, Geolocator and Rails-react gems. Using the coordinates of two users, FrienDiagram will identify the midpoint and populate a Google Map component with local venues to choose from. Users can can schedule events and decide on a venue in seconds.

Install Ruby, Rail, Postgresql - if not already installed.
Ruby: (Depending on your Ruby Version Manager)
```
rvm install 2.3.1
rvm use 2.3.1

- or -

rbenv install 2.3.1
rbenv use 2.3.1
```

Rails:
```
gem install rails
```

Postgresql:
```
brew install postgresql
brew postgresql-upgrade-database
brew services start postgresql
```

Download Repo:
```
git clone https://github.com/perohrstrom/FrienDiagram.git
cd FrienDiagram
```

Setup:
```
bundle install
rails db:create
rails db:migrate
rails db:seed (if desired)

rails s
```

Open web browser and visit localhost:3000
