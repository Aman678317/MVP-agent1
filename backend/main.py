from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.settings import settings
from app.routes import research, email, leads, campaigns, automation, social, callbot, subscription

app = FastAPI(
    title="AI Marketing SaaS API",
    description="Backend for the AI Marketing SaaS platform",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    settings.FRONTEND_URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if settings.FRONTEND_URL == "http://localhost:5173" else origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Routers
app.include_router(research.router)
app.include_router(email.router)
app.include_router(leads.router)
app.include_router(campaigns.router)
app.include_router(automation.router)
app.include_router(social.router)
app.include_router(callbot.router)
app.include_router(subscription.router)

@app.get("/", tags=["Health"])
async def health_check():
    return {"status": "ok", "message": "AI Marketing SaaS Backend is running."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=settings.PORT, reload=True)
