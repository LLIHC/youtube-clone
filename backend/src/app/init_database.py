from . import models
from .database import engine


def initialize_db():
    with engine.begin() as conn:
        conn.execute("PRAGMA foreign_keys = OFF;")
        for table in reversed(models.Base.metadata.sorted_tables):
            conn.execute("DELETE FROM {};".format(table.name))
        conn.execute("PRAGMA foreign_keys = ON;")
        conn.execute(
            """
            INSERT INTO channels(hashed_id, thumbnail_url, name)
            VALUES ('faked_id', 'google.com', 'root')
        """
        )
