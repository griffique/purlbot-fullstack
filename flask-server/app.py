from flask import (Flask,redirect, render_template, request, session)
import datetime
from werkzeug.security import check_password_hash, generate_password_hash
from pymongo import MongoClient
from email_validator import validate_email, EmailNotValidError
from decouple import config

key = config('key',default='')
password = config('password',default='')
url = f"mongodb+srv://quinn_griff:{password}@cluster0.std9b.mongodb.net/purlbot?retryWrites=true&w=majority"

app = Flask("__app__")
app.config.update(SECRET_KEY=key)
app.config['SESSION_TYPE'] = 'filesystem'

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True


# register for site (X)
# login with credentials (X)
# logout (X)
# serve react app from flask
# save pattern-- frontend react
# retrieve patterns from saved pattern area


# connect to MongoDB and define tables
cluster = MongoClient(url)
db=cluster["purlbot"]
users=db["users"]
patterns=db["patterns"]

# count users and make id
def userId():
    count = 0
    allUsers = users.find({})
    for user in allUsers:
        count +=1
    return count + 1

# add a new user
def addUser(userName, password, email):
    users.insert_one({
        "_id": userId(),
        "userName": userName,
        "password" : password,
        "email" : email
    })

# check for existing user
def userCheck(name):
    temp = []
    matches = users.find({"userName": name})
    for match in matches:
        temp.append(match)
    return temp


# add a new pattern - must be added to the front end with API
def addPattern(id, userId, gauge, type, nickname):
    today = datetime.datetime.now()
    patterns.insert_one ({
        "_id" : id,
        "userId": userId,
        "gauge" : gauge,
        "type" : type,
        "nickname" : nickname,
        "date" : today
    })

@app.route("/")
def my_index():
    return render_template('index.html')

@app.route("/logout")
def logout():
    # Forget user_id
    session.clear()
    # Redirect user to login form
    return redirect("/login")

@app.route("/oops")
def oops(message):
    return render_template('oops.html', error=message)

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form.get("username")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")
        email = request.form.get("email")
        try:
            # Validate & take the normalized form of the email
            # address for all logic beyond this point (especially
            # before going to a database query where equality
            # does not take into account normalization).
            cleanedEmail = validate_email(email).email
        except EmailNotValidError as e:
            # email is not valid, exception message is human-readable
            return oops(e)
        if len(name) < 3:
            return oops("Please enter a username of at least 3 characters.")
        elif len(password) < 3:
            return oops("Please enter a password of at least 3 characters.")
        elif password != confirmation:
            return oops("Passwords do not match.")
        else:
            if len(userCheck(name)) > 0:
                return oops("Username already exists.")
            else:
                hash = generate_password_hash(password)
                addUser(name, hash, email)
                return redirect('/login')
    else:
        return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Ensure username was submitted
        name = request.form.get("username")
        password = request.form.get("password")
        
        if not name:
            return oops("Must provide username")

        # Ensure password was submitted
        elif not password:
            return oops("Must provide password")

        # Query database for username
        results = userCheck(name)

        # Ensure username exists and password is correct
        if len(results) != 1 or not check_password_hash(results[0]["password"], password):
            return oops("Invalid username and/or password")
        else:
            # Remember which user has logged in
            session["user_id"] = results[0]["_id"]
            # Redirect user to home page
            return redirect("/")
    else:
        return render_template('login.html')


app.run(debug=True)
app.config['EXPLAIN_TEMPLATE_LOADING'] = True