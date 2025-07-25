from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

count = 0

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://jeffersonquinto.netlify.app/"],  # This allows all origins
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/count")
def get_count():
    return {"count": count}

@app.post("/click")
def increment_count():
    global count
    count += 1
    return {"count": count}

