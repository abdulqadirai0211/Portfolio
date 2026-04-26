"""
FastAPI backend for Abdul Qadir's portfolio website.
Serves structured resume data and handles contact form submissions.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from data.resume import resume_data
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Abdul Qadir Portfolio API",
    description="Backend API for portfolio website",
    version="1.0.0",
)

# CORS — allow React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: str
    message: str


@app.get("/api/health")
def health_check():
    """Health check endpoint."""
    return {"status": "healthy", "message": "Portfolio API is running"}


@app.get("/api/resume")
def get_resume():
    """Return full structured resume data."""
    return resume_data


@app.post("/api/contact")
def submit_contact(form: ContactForm):
    """Handle contact form submission."""
    logger.info(
        f"Contact form received — Name: {form.name}, Email: {form.email}, "
        f"Message: {form.message[:100]}..."
    )
    return {"status": "success", "message": "Thank you for reaching out! I'll get back to you soon."}
