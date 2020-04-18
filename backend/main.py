
import datetime
import time
import peewee as pw
from flask import Flask, render_template
from template import render

app = Flask(__name__, static_folder="assets", template_folder="templates")


@app.route('/')
def index():
    return render_template('home.htm')


if __name__ == "__main__":
    app.run(debug=True)
