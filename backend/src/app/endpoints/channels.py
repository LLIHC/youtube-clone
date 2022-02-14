from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import crud, database, schemas

router = APIRouter()


@router.post("/channels/", response_model=schemas.Channel)
def create_user(
    channel: schemas.ChannelCreate, db: Session = Depends(database.get_db)
):
    # db_channel = crud.get_user_by_email(db, email=user.email)
    # if db_channel:
    #     raise HTTPException(status_code=400, detail="Channel already registered")
    return crud.create_channel(db=db, channel=channel)


@router.get("/channels/", response_model=List[schemas.Channel])
def get_channels(
    skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)
):
    channels = crud.get_channels(db, skip=skip, limit=limit)
    return channels
