from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World UI!'

@app.route('/_status/')
def status():
    return 'OK'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8889, debug=True)
