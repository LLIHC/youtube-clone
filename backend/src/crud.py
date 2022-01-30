from sqlalchemy.orm import Session

from . import models


def get_contents(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Content).offset(skip).limit(limit).all()
