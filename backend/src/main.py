from typing import List
import uvicorn
from fastapi import Depends, FastAPI
from uvicorn.config import LOGGING_CONFIG
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.database import SessionLocal, engine
from app.api import api_router

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Backend", version="1.0", description="Serving Youtube Backend"
)
app.include_router(api_router)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/channels/", response_model=schemas.Channel)
def create_user(channel: schemas.ChannelCreate, db: Session = Depends(get_db)):
    # db_channel = crud.get_user_by_email(db, email=user.email)
    # if db_channel:
    #     raise HTTPException(status_code=400, detail="Channel already registered")
    return crud.create_channel(db=db, channel=channel)

@app.get("/channels/", response_model=List[schemas.Channel])
def get_channels(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    channels = crud.get_channels(db, skip=skip, limit=limit)
    return channels

# @app.get("/contents/", response_model)
# def read_contents(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
#     contents = crud.get_contents(db, skip=skip, limit=limit)
#     return contents


if __name__ == "__main__":
    LOGGING_CONFIG["formatters"]["default"][
        "fmt"
    ] = "%(asctime)s %(levelprefix)s %(message)s"
    uvicorn.run("main:app", port=5555, reload=True)
