from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Index Page'

@app.route('/hello')
def hello():
    return 'Hello, World!'

@app.route('/user/<username>')
def show_user_profile(username):
    return 'User %s' % username

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        do_the_login()
    else:
        show_the_login_form()

if __name__ == "__main__":
    app.run(debug=True)

