import uvicorn
from fastapi import FastAPI
from uvicorn.config import LOGGING_CONFIG

from app import models
from app.api import api_router
from app.database import engine

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


if __name__ == "__main__":
    LOGGING_CONFIG["formatters"]["default"][
        "fmt"
    ] = "%(asctime)s %(levelprefix)s %(message)s"
    uvicorn.run("main:app", port=5555, reload=True)
