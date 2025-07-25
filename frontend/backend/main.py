from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow all origins (not recommended for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://jeffersonquinto.netlify.app/"],  # or use your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/count")
def read_count():
    return {"count": 5}

@app.post("/click")
def update_count():
    return {"count": 6}

