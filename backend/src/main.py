import uvicorn
from fastapi import FastAPI
from uvicorn.config import LOGGING_CONFIG

from app.api import api_router
from app.database import initialize_db

initialize_db()

app = FastAPI(
    title="Backend", version="1.0", description="Serving Youtube Backend"
)
app.include_router(api_router)


if __name__ == "__main__":
    LOGGING_CONFIG["formatters"]["default"][
        "fmt"
    ] = "%(asctime)s %(levelprefix)s %(message)s"
    uvicorn.run("main:app", port=5555, reload=True)
