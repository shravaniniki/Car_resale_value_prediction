# Backend - app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.after_request
def add_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')

    return response


# Load the trained model
model = pickle.load(open('XGBoost_Model.pkl', 'rb'))

# Assuming your dataset is a pandas DataFrame named df
new_data = pd.read_csv('cardekho_dataset.csv')

car_names = new_data['car_name'].unique()

@app.route('/')
def index():
    return "Welcome"

@app.route('/prediction', methods=['POST'])
def predict():
    data = request.json
    car_name = data['car_name']
    print(car_name)
    vehicle_age = int(data['vehicle_age'])
    km_driven = int(data['km_driven'])
    seller_type = int(data['seller_type'])
    fuel_type = int(data['fuel_type'])
    transmission_type = int(data['transmission_type'])
    mileage = float(data['mileage'])
    engine = float(data['engine'])
    max_power = float(data['max_power'])
    seats = int(data['seats'])
    print(vehicle_age,km_driven,seller_type,fuel_type,transmission_type,mileage,engine,max_power,seats)
    
    
    prediction=model.predict(pd.DataFrame(columns=['car_name','vehicle_age','km_driven','seller_type','fuel_type','transmission_type','mileage','engine','max_power','seats'],data=np.array([car_name,vehicle_age,km_driven,seller_type,fuel_type,transmission_type,mileage,engine,max_power,seats]).reshape(1,10)))

    print(round(prediction[0]))
    result = prediction[0]

# Convert the float value to a string
    result_str = str(result)

# Create a JSON response with the result
    response = jsonify({"result": result_str})

# Return the response
    return response

    # # Assuming model.predict takes a 2D array as input
    # prediction = model.predict(pd.DataFrame([car_name, vehicle_age, km_driven, seller_type, fuel_type, transmission_type, mileage, engine, max_power, seats]))
    # print(prediction.tolist())
    # # Return prediction as JSON response
    #return jsonify({prediction[0]})
    #return "HEllo"
@app.route('/car_names')
def get_car_names():
    try:
        return jsonify({'car_names': car_names.tolist()})
    except Exception as e:
        print(e)
        return jsonify({'error': 'Error fetching car names'}), 500

if __name__ == '__main__':
    app.run(debug=True)
