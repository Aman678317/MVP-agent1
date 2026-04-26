import google.generativeai as genai
from app.config.settings import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

class AIService:
    def __init__(self):
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def generate_research(self, query: str):
        prompt = f"Conduct a detailed marketing research on the following topic: {query}. Include target audience, competitor analysis, and growth strategies."
        response = self.model.generate_content(prompt)
        return response.text

    async def generate_email(self, goal: str, target: str):
        prompt = f"Write a professional marketing email for {target} with the goal of {goal}. Make it engaging and include a clear call to action."
        response = self.model.generate_content(prompt)
        return response.text

    async def generate_social_post(self, platform: str, topic: str):
        prompt = f"Create a viral social media post for {platform} about {topic}. Include relevant hashtags and emojis."
        response = self.model.generate_content(prompt)
        return response.text

ai_service = AIService()
