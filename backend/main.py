# main.py

from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

latest_data = {
    "temperature": None,
    "depth": None,
    "image_url": None
}

@app.post("/upload")
async def upload_data(
    image: UploadFile = File(...),
    temperature: float = Form(...),
    depth: float = Form(...)
):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    image_path = os.path.join(UPLOAD_FOLDER, f"{timestamp}.jpg")

    with open(image_path, "wb") as f:
        f.write(await image.read())

    latest_data.update({
        "temperature": temperature,
        "depth": depth,
        "image_url": f"/images/{os.path.basename(image_path)}"
    })

    return {"message": "Data received successfully"}

@app.get("/latest")
def get_latest():
    return {
        "temperature": 24.5,
        "depth": 4.2,
        "image_url": "/images/sample.jpg"  # Add sample.jpg to backend/images/
    }

from fastapi.staticfiles import StaticFiles

app.mount("/images", StaticFiles(directory="images"), name="images")


