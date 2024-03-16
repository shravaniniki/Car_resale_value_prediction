import numpy as np
from flask import Flask, request , jsonify,render_template
import pickle

#Create flask app 
app=Flask(__name__)

#load the pickle model

model = pickle.load(open("XGBoost_regressor_model","rb"))


@app.route('/')
def CarPriceEstimator():
    return {"member":["member1","member2"]}
    # context = {
    #     CAR_DATA_KEY: None,
    #     CAR_VALUE_KEY: None
    # }
    # car_list = get_carlist()
    
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
    #     carprice_df = carprice_data.get_car_data_as_dict()
    #     carprice_predictor = CarPricePredictor(model_dir=MODEL_DIR)
    #     carprice_value = carprice_predictor.predict(X=carprice_df)
    #     context = {
    #         CAR_DATA_KEY: carprice_data.get_car_data_as_dict(),
    #         CAR_VALUE_KEY: round(carprice_value[0], 2),
    #     }
    #     return render_template('CarPriceEstimator.js', context=context)
    # return render_template("CarPriceEstimator.js", context=context, car_list= car_list)



if __name__ == "__main__":
    app.run(debug=True)