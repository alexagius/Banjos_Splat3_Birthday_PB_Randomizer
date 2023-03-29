from flask import render_template,jsonify,request
from app import app

@app.route('/')
@app.route('/index', methods=['GET','POST'])
def index():
    user = {'nickname': 'Miguel'}  # fake user
    if request.method == 'GET':
        print('GET IT GIRL')

    if request.method == 'POST':
        print('fuck you')
    return render_template('dist/index.html',
                           title='Home',
                           user=user)


@app.route('/accept_random', methods=['POST','GET'])
def accept_random():
    # return jsonify({
    #     'text': microsoft_translate(
    #         request.form['text'],
    #         request.form['sourceLang'],
    #         request.form['destLang']) })
    # a = request.args.get('a', 0, type=int)
    dict = {'lalalala':'this'}


    return jsonify(dict)

@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    return jsonify(result=a + b)
