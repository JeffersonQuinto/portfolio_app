from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os

app = FastAPI()

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (or specify your frontend URL)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulated in-memory count
click_count = 0

@app.get("/count")
def get_count():
    return {"count": click_count}

@app.post("/click")
def increment_count():
    global click_count
    click_count += 1
    return {"count": click_count}

# Serve frontend
@app.get("/")
def serve_frontend():
    return FileResponse(os.getenv("FRONTEND_PATH", "index.html"))

