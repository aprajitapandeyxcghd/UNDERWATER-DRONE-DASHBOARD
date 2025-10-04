# drone_sender.py

import socket
import picamera
import time
import json
import requests
import random

BACKEND_URL = "http://<your_pc_ip>:8000/upload"

def get_sensor_data():
    return {
        "temperature": round(24 + random.random(), 2),
        "depth": round(3 + random.random(), 2)
    }

with picamera.PiCamera() as camera:
    camera.resolution = (320, 240)
    time.sleep(2)
    image_path = "/tmp/capture.jpg"

    while True:
        camera.capture(image_path)

        # Sensor data
        data = get_sensor_data()

        with open(image_path, 'rb') as img_file:
            files = {'image': img_file}
            response = requests.post(BACKEND_URL, data=data, files=files)
            print(response.text)

        time.sleep(3)
