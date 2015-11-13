import sqlite3
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash

app = Flask(__name__)

@app.route('/_status/')
def status():
    return 'OK'

@app.route('/')
def display():
    return render_template('display.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8889, debug=True)
