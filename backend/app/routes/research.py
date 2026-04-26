from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.ai_service import ai_service

router = APIRouter(prefix="/research", tags=["Research"])

class ResearchRequest(BaseModel):
    query: str

@router.post("/")
async def perform_research(request: ResearchRequest):
    try:
        result = await ai_service.generate_research(request.query)
        return {"query": request.query, "insights": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
