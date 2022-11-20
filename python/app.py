from flask import Flask
from flask import request
import urllib
from getBusData import getData


app = Flask(__name__)

@app.route('/')
def user():
    bus_name = urllib.parse.quote(request.args.get("bus_name")) # 인코딩
    bus_id = request.args.get("bus_id")
    
    return getData(bus_name, bus_id)

if __name__ == '__main__':
    app.run(debug=True)
