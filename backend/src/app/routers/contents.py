from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import crud, database, schemas

router = APIRouter()


@router.get("/", response_model=List[schemas.Content])
def get_contents(
    skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)
):
    contents = crud.get_contents(db, skip=skip, limit=limit)
    return contents
