from fastapi import APIRouter

router = APIRouter(prefix="/leads", tags=["Leads"])

@router.post("/")
async def create_lead(data: dict):
    return {"status": "success", "message": "Create lead stub"}

@router.get("/")
async def get_leads():
    return {"status": "success", "data": []}

@router.put("/{lead_id}")
async def update_lead(lead_id: str, data: dict):
    return {"status": "success", "message": f"Update lead {lead_id} stub"}

@router.delete("/{lead_id}")
async def delete_lead(lead_id: str):
    return {"status": "success", "message": f"Delete lead {lead_id} stub"}
