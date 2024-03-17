from flask import Flask, request , jsonify,render_template

import pickle
import pandas as pd

#Create flask app 
app=Flask(__name__)

#load the pickle model

model = pickle.load(open("XGBoost_Model.pkl","rb"))

car_data = pd.read_csv('Cleaned_car.csv')


@app.route('/predict',method=['POST'])
def predict():    
    
    # if request.method == "POST":
    #     car_name = request.form.get("car_name")
    #     vehicle_age = int(request.form.get("vehicle_age"))
    #     km_driven = int(request.form.get("km_driven"))
    #     seller_type = request.form.get("seller_type")
    #     fuel_type = request.form.get("fuel_type")
    #     transmission_type = request.form.get("transmission")
    #     mileage = float(request.form.get("mileage"))
    #     engine = int(request.form.get("engine"))
    #     max_power = float(request.form.get("max_power"))
    #     seats = int(request.form.get("seats"))

    #     carprice_data = CarPriceData(car_name= car_name, 
    #                                  vehicle_age= vehicle_age, 
    #                                  km_driven= km_driven, 
    #                                  seller_type= seller_type, 
    #                                  fuel_type= fuel_type, 
    #                                  transmission_type= transmission_type, 
    #                                  mileage= mileage, 
    #                                  engine= engine, 
    #                                  max_power= max_power, 
    #                                  seats= seats
    #                                  )
        
        return render_template('CarPriceEstimator.js', context=context)
    # return render_template("CarPriceEstimator.js", context=context, car_list= car_list)



if __name__ == "__main__":
    app.run(debug=True)