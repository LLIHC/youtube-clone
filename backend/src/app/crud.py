from sqlalchemy.orm import Session

from . import models, schemas


def get_contents(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Content).offset(skip).limit(limit).all()


def get_channels(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Channel).offset(skip).limit(limit).all()


def create_channel(db: Session, channel: schemas.ChannelCreate):
    db_channel = models.Channel(
        hashed_id=channel.hashed_id,
        thumbnail_url=channel.thumbnail_url,
        name=channel.name,
    )
    db.add(db_channel)
    db.commit()
    db.refresh(db_channel)
    return db_channel
