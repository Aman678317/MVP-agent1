from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.ai_service import ai_service

router = APIRouter(prefix="/email", tags=["Email"])

class EmailGenerateRequest(BaseModel):
    goal: str
    target_audience: str

@router.post("/generate")
async def generate_marketing_email(request: EmailGenerateRequest):
    try:
        content = await ai_service.generate_email(request.goal, request.target_audience)
        return {"goal": request.goal, "content": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/send")
async def send_email():
    # Placeholder for SMTP integration
    return {"message": "Email sending logic would go here"}
