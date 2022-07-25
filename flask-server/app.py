from flask import (Flask,redirect, render_template, request, send_from_directory, session)
from flask_restful import Resource, Api, reqparse
import datetime
from bson.objectid import ObjectId
from werkzeug.security import check_password_hash, generate_password_hash
from pymongo import MongoClient
from email_validator import validate_email, EmailNotValidError
from decouple import config

key = config('key',default='')
password = config('password',default='')
url = f"mongodb+srv://quinn_griff:{password}@cluster0.std9b.mongodb.net/purlbot?retryWrites=true&w=majority"

app = Flask("__app__", static_url_path='', static_folder='build')
api = Api(app)
app.config.update(SECRET_KEY=key)
app.config['SESSION_TYPE'] = 'filesystem'

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True


# register for site (X)
# login with credentials (X)
# logout (X)
# api endpoint for pattern retrieval (X)
# api endpoint for pattern save (X)
# frontend design for save/retrieve
# serve react app from flask
# save pattern fn
# retrieve patterns fn


# connect to MongoDB and define tables
cluster = MongoClient(url)
db=cluster["purlbot"]
users=db["users"]
patterns=db["patterns"]


# add a new user
def addUser(password, email):
    users.insert_one({
        "password" : password,
        "email" : email
    })

# add a new user
def deleteUser():
    users.delete_one({
        "email" : session["user_email"]
    })

# check for existing user
def userCheck(email):
    temp = []
    matches = users.find({"email": email})
    for match in matches:
        temp.append(match)
    return temp

# put request

def updateUser(email, newPassword):
    result = users.replace_one(
        {"email": session["user_email"]},
        {
            "email" : email,
            "password" : generate_password_hash(newPassword)
        }
    )


# add a new pattern - must be added to the front end with API
def addPattern(gauge, type, nickname):
    if session:
        patterns.insert_one ({
            "userId": session["user_email"],
            "gauge" : gauge,
            "type" : type,
            "nickname" : nickname,
        })
    else: 
        return render_template('oops.html', error="Please register and/or log in to save patterns.")


def deletePattern(patternId):
    patterns.delete_one({
        "_id" : ObjectId(patternId)
    })

def getPatterns():
    temp = []
    matches = patterns.find({"userId": session["user_email"]})
    for savedPattern in matches:
        temp.append({
            "gauge": savedPattern["gauge"],
            "type": savedPattern["type"],
            "nickname": savedPattern["nickname"],
            "id": savedPattern["_id"]
        })
    print(temp)
    return temp

#api setup for pattern CRUD
class Patterns(Resource):
    # methods go here
    def get(pattern):
        temp = []
        matches = patterns.find({"userId": session["user_email"]})
        for savedPattern in matches:
            temp.append({
                "gauge": savedPattern["gauge"],
                "type": savedPattern["type"],
                "nickname": savedPattern["nickname"],
                "id": savedPattern["_id"]
            })
        return temp

    def post(pattern):
        print(session)
        parser = reqparse.RequestParser()  # initialize parser

        parser.add_argument('gauge', required=True)  # add args
        parser.add_argument('type', required=True)
        parser.add_argument('nickname', required=True)
        
        args = parser.parse_args()  # parse arguments to dictionary

        addPattern(args['gauge'], args['type'], args['nickname'])
        return args, 200
            

api.add_resource(Patterns, '/patterns')


@app.route("/", defaults={'path':''})
# def my_index():
def serve(path):
    return send_from_directory(app.static_folder,'index.html')
    # return render_template('index.html')

@app.route("/logout")
def logout():
    # Forget user_id
    session.clear()
    # Redirect user to login form
    return redirect("/login")

@app.route("/account", methods=["GET", "POST"])
def account():
    if request.method == "POST":

        email = request.form.get("account-email")
        oldPassword = request.form.get("account-password")
        newPassword = request.form.get("account-new-password")
        confirmation = request.form.get("account-confirmation")

        if not email:
            return oops("Must provide email")

        elif not password:
            return oops("Must provide password")

        elif not newPassword:
            return oops("Must provide new password")
        
        results = userCheck(session["user_email"])
        if not check_password_hash(results[0]["password"], oldPassword):
            return oops("Invalid email and/or password")

        elif newPassword != confirmation:
            return oops("Passwords do not match.")

        else:
            updateUser(email, newPassword)
            return render_template('success.html', message="Your account has been updated.")
            session["user_email"] = email
    else:
        if session:
            return render_template('account.html', userEmail= session["user_email"])
        else:
            return render_template('oops.html', error="Please register and/or log in to see your account details.")

@app.route("/delete", methods=["GET", "POST"])
def delete():
    if request.method == "POST":
        confirmation = request.form.get("confirm-delete")
        if confirmation == "on":
            deleteUser()
            return render_template('success.html', message="Your account has been deleted.")
        else:
            return render_template('oops.html', error="Account not deleted. Please check the confirmation box and retry.")
    else:
        return render_template('delete.html')

@app.route("/forgot")
def forgot():
    return render_template('forgot.html')

@app.route("/saved-patterns", methods=["GET","POST"])
def savedPatterns():
    if request.method == "GET":
        foundPatterns = getPatterns()
        return render_template('saved-patterns.html', foundPatterns=foundPatterns)
    elif request.method == "POST":
        patternId = request.form.get("pattern-id")
        deletePattern(patternId)
        foundPatterns = getPatterns()
        return render_template('saved-patterns.html', foundPatterns=foundPatterns)

@app.route("/reset")
def reset():
    return render_template('reset.html')

@app.route("/oops")
def oops(message):
    return render_template('oops.html', error=message)

@app.route("/success")
def success(message):
    return render_template('success.html', message=message)

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        password = request.form.get("register-password")
        confirmation = request.form.get("register-confirmation")
        email = request.form.get("register-email")
        try:
            # Validate & take the normalized form of the email
            # address for all logic beyond this point (especially
            # before going to a database query where equality
            # does not take into account normalization).
            cleanedEmail = validate_email(email).email
        except EmailNotValidError as e:
            # email is not valid, exception message is human-readable
            return oops(e)
        if len(password) < 3:
            return oops("Please enter a password of at least 3 characters.")
        elif password != confirmation:
            return oops("Passwords do not match.")
        else:
            if len(userCheck(email)) > 0:
                return oops("Email already exists. Return to login to reset your password if necessary.")
            else:
                hash = generate_password_hash(password)
                addUser(hash, email)
                return redirect('/login')
    else:
        return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Ensure email was submitted
        email = request.form.get("login-email")
        password = request.form.get("login-password")
        
        if not email:
            return oops("Must provide email")

        # Ensure password was submitted
        elif not password:
            return oops("Must provide password")

        # Query database for email
        results = userCheck(email)

        # Ensure email exists and password is correct
        if len(results) != 1 or not check_password_hash(results[0]["password"], password):
            return oops("Invalid email and/or password")
        else:
            # Remember which user has logged in
            session["user_email"] = results[0]["email"]
            # Redirect user to home page
            return redirect("/")
    else:
        return render_template('login.html')


app.run(debug=True)
app.config['EXPLAIN_TEMPLATE_LOADING'] = True