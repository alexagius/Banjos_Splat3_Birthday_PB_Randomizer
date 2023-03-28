from flask import render_template,jsonify,request
from app import app

@app.route('/')
@app.route('/index', methods=['GET','POST'])
def index():
    user = {'nickname': 'Miguel'}  # fake user
    return render_template('dist/index.html',
                           title='Home',
                           user=user)

def index():
    user = {'nickname': 'Miguel'}  # fake user
    posts = [  # fake array of posts
        {
            'author': {'nickname': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'nickname': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    return render_template("index.html",
                           title='Home',
                           user=user,
                           posts=posts)


@app.route('/accept_random', methods=['POST'])
def accept_random():
    # return jsonify({
    #     'text': microsoft_translate(
    #         request.form['text'],
    #         request.form['sourceLang'],
    #         request.form['destLang']) })
    # a = request.args.get('a', 0, type=int)
    print('lalalala')
    print(data)
    print(e)
    print(callback)
    returnz = 'MOTHAFUCKA ITS DONE'
    print(callback)

    return jsonify(e, data, callback, returnz)

@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    return jsonify(result=a + b)
