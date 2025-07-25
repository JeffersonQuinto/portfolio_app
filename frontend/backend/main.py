from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from frontend (adjust for Netlify domain if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

count = 0  # In-memory variable

@app.get("/count")
def get_count():
    return {"count": count}

@app.post("/click")
def increase_count():
    global count
    count += 1
    return {"count": count}

