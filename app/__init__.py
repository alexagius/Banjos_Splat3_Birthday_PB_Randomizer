from flask import Flask


app = Flask(__name__,
    template_folder='templates',
    static_folder='templates/src'
            )


from app import views