# Tempo README
---

## 1. Heroku
To view this application, please go to: https://tempo169.herokuapp.com/


## 2. Local Server
To run it locally, have Ruby on Rails installed with Ruby version 2.2.0 and Rails version 4.2.4. Run 'rails s' in the folder to run the server on localhost:3000.

Upon first install, you will need to set up the database before any data will be displayed in the app. This can be done by running:
	rake db:create
	rake db:setup
	rake db:migrate
	rake db:reset


## 3. Tests
To run all of the functional and unit tests on the back end, run:
	bundle exec rspec
	
After running these tests, you will also be able to see our code coverage percentage in the terminal. If you'd like to see a visualization of our code coverage, open up the folder in tempo/coverage and open the file index.html in a web browser. Our code coverage should be around ~99.82%.

You can also run some model-only unit tests on the back end through the command:
	rake test:models

To run the front end tests over the Backbone.js framework, run the command:
	bundle exec teaspoon --coverage=default

**Note**: some Backbone.js tests will fail due to conflicts with Sinon, Teaspoon, and Backbone.js. However, you will
still be able to see our code coverage for this part. Backbone.js tests are insignificant, as we run automated UI testing through Capybara and the Capybara-Webkit driver (these are included when running bundle exec rspec).


## 4. Troubleshooting
If things aren't working right, try:
1. rake db:drop
2. rake db:create
3. rake db:migrate
4. rake db:reset
5. rake assets:clean
6. rake assets:precompile

If you are getting an error related to 'qt', 'capybara', 'capybara-webkit', or 'bundle install', you probably don't have the correct applications installed on your local machine required to run our app with Capybara (this only applies for test and development environments). In that case, you need to install qt version 5+. Some brief steps you can take to do this are:
	
1. Bundle install with capybara-webkit - if this errors, see #2
2. Have QT version 5+ installed on your local machine (brew install qt5)
  * -> If you have a conflict with QT version 4, you will need to remove version 4 and reinstall version 5+
3. Have QT linked via Homebrew: brew link --force qt5
  * -> If you don't have permission to do this, try: sudo chown -R $USER /usr/local    and run the command at #3 again
  * -> Then run: which qmake
  * -> This should return /usr/local/bin/qmake
4. Bundle install again 

