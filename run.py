#!flask/bin/python
from app import app



if __name__ == '__main__':
    # from app import db
    # db.create_all()
    #set FLASK_CONFIG=local
    app.run(debug=True)