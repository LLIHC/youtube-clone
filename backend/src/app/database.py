from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
Base.metadata.create_all(bind=engine)


def initialize_db():
    with engine.begin() as conn:
        conn.execute("PRAGMA foreign_keys = OFF;")
        for table in reversed(Base.metadata.sorted_tables):
            conn.execute("DELETE FROM {};".format(table.name))
        conn.execute("PRAGMA foreign_keys = ON;")
        conn.execute(
            """
            INSERT INTO channels(hashed_id, thumbnail_url, name)
            VALUES ('faked_id', 'google.com', 'root')
        """
        )


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
