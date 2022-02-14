from typing import List

import uvicorn
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from uvicorn.config import LOGGING_CONFIG

from app import crud, models, schemas
from app.api import api_router
from app.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

with engine.begin() as conn:
    conn.execute("PRAGMA foreign_keys = OFF;")
    for table in reversed(models.Base.metadata.sorted_tables):
        conn.execute("DELETE FROM {};".format(table.name))
    conn.execute("PRAGMA foreign_keys = ON;")

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
def get_channels(
    skip: int = 0, limit: int = 100, db: Session = Depends(get_db)
):
    channels = crud.get_channels(db, skip=skip, limit=limit)
    return channels


if __name__ == "__main__":
    LOGGING_CONFIG["formatters"]["default"][
        "fmt"
    ] = "%(asctime)s %(levelprefix)s %(message)s"
    uvicorn.run("main:app", port=5555, reload=True)
