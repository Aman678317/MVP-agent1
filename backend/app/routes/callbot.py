from fastapi import APIRouter

router = APIRouter(prefix="/callbot", tags=["Call Bot"])

@router.post("/incoming")
async def incoming_call():
    return {"status": "success", "message": "Incoming call webhook stub"}

@router.post("/respond")
async def call_respond(data: dict):
    return {"status": "success", "message": "Call response stub"}
