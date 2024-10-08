import pandas as pd
import lightgbm as lgb
from fastapi import FastAPI, Form
import joblib
from utils import *

# Load the pre-trained LightGBM model
model = joblib.load('./models/lgb_model.pkl')

app = FastAPI()

# Update the POST method to handle form input
@app.post("/predict/")
async def predict(
    location: str = Form(...),
    parental_occupation: str = Form(...),
    study_hours: str = Form(...),
    internet_access: str = Form(...),
    understanding_of_subjects: str = Form(...),
    adequate_jamb_preparation: str = Form(...)
):
    # Map the form inputs to encoded values using the mapping dictionaries
    mapped_location = location_map.get(location, 0)
    mapped_parent_occupation = parent_occupation_map.get(parental_occupation, 0)
    mapped_study_hours = study_map.get(study_hours, 0)
    mapped_internet_access = internet_map.get(internet_access, 0)
    mapped_understanding = understanding_map.get(understanding_of_subjects, 0)
    mapped_jamb_prep = jamb_prep_map.get(adequate_jamb_preparation, 0)

    # Prepare the input data for the model
    input_data = pd.DataFrame({
        'Location': [mapped_location],
        'Parental Occupation': [mapped_parent_occupation],
        'Study Hours': [mapped_study_hours],
        'Internet Access': [mapped_internet_access],
        'Understanding of Subjects': [mapped_understanding],
        'Adequate JAMB Preparation': [mapped_jamb_prep]
    })

    # Make prediction
    prediction = model.predict(input_data)
    predicted_result = int(prediction[0] > 0.5)  # Assuming binary classification

    return {"prediction": "Pass" if predicted_result == 1 else "Fail"}
