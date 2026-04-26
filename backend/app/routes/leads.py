from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.db_service import db_service
from typing import List

router = APIRouter(prefix="/leads", tags=["Leads"])

class Lead(BaseModel):
    name: str
    email: str
    source: str = "AI Agent"
    status: str = "new"

@router.get("/{user_id}", response_model=List[dict])
async def get_user_leads(user_id: str):
    return await db_service.get_leads(user_id)

@router.post("/{user_id}")
async def add_user_lead(user_id: str, lead: Lead):
    return await db_service.add_lead(user_id, lead.dict())
