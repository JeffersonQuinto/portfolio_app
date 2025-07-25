from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Initialize count
count = 0

# Allow specific origins (recommended for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://jeffersonquinto.netlify.app"],  # Ensure no trailing slash
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/count")
def read_count():
    return {"count": count}

@app.post("/click")
def update_count():
    global count
    count += 1
    return {"count": count}

