from fastapi import APIRouter

from app.endpoints import channels

api_router = APIRouter()
api_router.include_router(
    channels.router, prefix="/channels", tags=["channels"]
)
