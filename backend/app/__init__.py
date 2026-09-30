from flask import Flask
from .db import init_db

def create_app():
    app = Flask(__name__)

    init_db()

    @app.get("/api/health")
    def health():
        return {"message": "Flask is working"}

    return app