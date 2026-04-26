import firebase_admin
from firebase_admin import credentials, firestore
from app.config.settings import settings
import json
import os

# Initialize Firebase
if settings.FIREBASE_CREDENTIALS:
    try:
        # Check if credentials is a JSON string or a file path
        if settings.FIREBASE_CREDENTIALS.startswith('{'):
            cred_dict = json.loads(settings.FIREBASE_CREDENTIALS)
            cred = credentials.Certificate(cred_dict)
        else:
            cred = credentials.Certificate(settings.FIREBASE_CREDENTIALS)
        
        firebase_admin.initialize_app(cred)
    except Exception as e:
        print(f"Firebase initialization error: {e}")

db = firestore.client() if firebase_admin._apps else None

class DBService:
    def __init__(self):
        self.db = db

    async def add_lead(self, user_id: str, lead_data: dict):
        if not self.db: return {"error": "Firebase not configured"}
        doc_ref = self.db.collection('users').document(user_id).collection('leads').document()
        doc_ref.set(lead_data)
        return {"id": doc_ref.id, **lead_data}

    async def get_leads(self, user_id: str):
        if not self.db: return []
        leads = self.db.collection('users').document(user_id).collection('leads').stream()
        return [{"id": l.id, **l.to_dict()} for l in leads]

    async def save_campaign(self, user_id: str, campaign_data: dict):
        if not self.db: return {"error": "Firebase not configured"}
        doc_ref = self.db.collection('users').document(user_id).collection('campaigns').document()
        doc_ref.set(campaign_data)
        return {"id": doc_ref.id, **campaign_data}

db_service = DBService()
