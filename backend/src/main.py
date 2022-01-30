import uvicorn
from fastapi import Depends, FastAPI
from uvicorn.config import LOGGING_CONFIG
from sqlalchemy.orm import Session

from app.api import api_router

app = FastAPI(
    title="Backend", version="1.0", description="Serving Youtube Backend"
)
app.include_router(api_router)

# Dependency
def get_db(request: Request):
    return request.state.db

@app.get("/contents/", response_model)
def read_contents(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    contents = crud.get_contents(db, skip=skip, limit=limit)
    return contents


if __name__ == "__main__":
    LOGGING_CONFIG["formatters"]["default"][
        "fmt"
    ] = "%(asctime)s %(levelprefix)s %(message)s"
    uvicorn.run("main:app", port=5555, reload=True)
