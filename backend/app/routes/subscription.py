from fastapi import APIRouter

router = APIRouter(prefix="/subscription", tags=["Subscription"])

@router.post("/order")
async def create_order(data: dict):
    return {"status": "success", "message": "Create payment order stub"}

@router.post("/verify")
async def verify_payment(data: dict):
    return {"status": "success", "message": "Verify payment signature stub"}
