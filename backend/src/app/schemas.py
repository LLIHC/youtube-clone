from typing import List

from pydantic import BaseModel


class ContentBase(BaseModel):
    hashed_id: str
    title: str
    description: str
    thumbnail_url: str
    channel_id: int

class ContentCreate(ContentBase):
    pass


class Content(ContentBase):
    # n_views: int
    # n_likes: int

    class Config:
        orm_mode = True


class ChannelBase(BaseModel):
    hashed_id: str
    thumbnail_url: str
    name: str


class ChannelCreate(ChannelBase):
    pass


class Channel(ChannelBase):
    id: int
    # n_followers: int
    contents: List[Content] = []

    class Config:
        orm_mode = True
