from fastapi import APIRouter

from app.endpoints import channels, contents

api_router = APIRouter()
api_router.include_router(
    channels.router, prefix="/channels", tags=["channels"]
)
api_router.include_router(
    contents.router, prefix="/contents", tags=["contents"]
)
