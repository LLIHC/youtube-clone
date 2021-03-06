from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base, engine


class Channel(Base):
    __tablename__ = "channels"

    id = Column(Integer, primary_key=True, index=True)
    hashed_id = Column(String, unique=True)
    thumbnail_url = Column(String, index=True)
    name = Column(String)
    # n_followers = Column(Integer, default=0)

    contents = relationship("Content", back_populates="owner")


class Content(Base):
    __tablename__ = "contents"

    id = Column(Integer, primary_key=True, index=True)
    hashed_id = Column(String, unique=True)
    title = Column(String)
    # n_views = Column(Integer)
    # upload_date = Column(DateTime)
    description = Column(String)
    # n_likes = Column(Integer)
    thumbnail_url = Column(String)
    channel_id = Column(Integer, ForeignKey("channels.hashed_id"))
    owner = relationship("Channel", back_populates="contents")


Base.metadata.create_all(bind=engine)
