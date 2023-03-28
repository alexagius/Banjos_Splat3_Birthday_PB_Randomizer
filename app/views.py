from flask import render_template,jsonify
from app import app

@app.route('/')
@app.route('/index')
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


@app.route('/random_selections', methods=['POST'])
def accept_random(e, data, callback):
    # return jsonify({
    #     'text': microsoft_translate(
    #         request.form['text'],
    #         request.form['sourceLang'],
    #         request.form['destLang']) })
    print('lalalala')
    print(data)
    print(e)
    print(callback)
    returnz = 'MOTHAFUCKA ITS DONE'
    print(callback)

    return jsonify(e, data, callback, returnz)