Welcome to the backend of the budgie app. This is being built with Django REST framework.

You will need to make a database in psql 

To do so, please install psql on your system, if you have not got it installed already. Then run: 

`$ psql`
`$ CREATE DATABASE budgie;`
`$ ALTER USER admin CREATEDB;`

^^^ that last command may look strange and is not essential. If you want to run the tests, you will need to run that command to allow the test admin to create databases to run the tests. Dont worry, it will not keep the database or create any other databases. 

To run the server, run:
`$ cd src`
`$ pip3 install requirements.txt`
`$ python manage.py makemigrations`
`$ python manage.py migrate`
`$ python manage.py runserver`


To see the tests, please run:
`$ python manage.py test`