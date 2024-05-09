from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import numpy as np
import pickle
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Load the trained model
knn_model = pickle.load(open('model.pkl', 'rb'))

# Define a Pydantic model for the request body
class Features(BaseModel):
    features: List[float]

# Initialize FastAPI
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],  # Allow all origins
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Define a function to make predictions
def predict_top_roles(features, top_n=3):
    features = np.array(features).reshape(1, -1)  # Reshape to match the model's input format
    probabilities = knn_model.predict_proba(features)[0]  # Predict probabilities for each class
    role_indices = np.argsort(probabilities)[::-1][:top_n]  # Get indices of top N roles by probability
    top_roles = [knn_model.classes_[index] for index in role_indices]  # Get role names corresponding to indices
    return top_roles

# Define an endpoint to predict top roles
@app.post("/career/")
async def predict_roles(data: Features):
    top_predicted_roles = predict_top_roles(data.features)
    return {"top_predicted_roles": top_predicted_roles}

if __name__ == '__main__':
    uvicorn.run('main:app', port=8000,reload=True)