from fastapi import APIRouter

router = APIRouter(prefix="/social", tags=["Social"])

@router.post("/generate")
async def generate_social_post(data: dict):
    return {"status": "success", "message": "Social post generation stub"}

@router.post("/schedule")
async def schedule_social_post(data: dict):
    return {"status": "success", "message": "Social post scheduling stub"}
