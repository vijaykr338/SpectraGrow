import joblib
import numpy as np

rf_regressor = joblib.load("ml_model/rf_model.pkl")
print("loaded rf_regressor")

def predict_phosphorus(longitude, latitude):
    input_data = np.array([[longitude, latitude]])
    prediction = rf_regressor.predict(input_data)
    return prediction[0]


# # 📌 Example Prediction
# longitude = 30.5  # Example longitude
# latitude = -3.2   # Example latitude
# predicted_phosphorus = predict_phosphorus(longitude, latitude)
# print(f"Predicted Phosphorus Content at ({longitude}, {latitude}): {predicted_phosphorus}")
