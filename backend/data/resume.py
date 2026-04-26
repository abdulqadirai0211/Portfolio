"""
Structured resume data for Abdul Qadir's portfolio.
Served via FastAPI endpoints.
"""

resume_data = {
    "personal_info": {
        "name": "Abdul Qadir",
        "title": "AI Engineer & Data Scientist",
        "email": "abdulkadir9929@gmail.com",
        "phone": "+91 9792753113",
        "linkedin": "https://linkedin.com/in/abdul-qadir0",
        "github": "https://github.com/AbdulQadir0211",
        "location": "India",
        "summary": (
            "AI/ML Engineer with 2+ years of hands-on experience building production-grade "
            "AI applications. Specialized in Generative AI, Agentic Systems, and end-to-end "
            "ML pipelines. Passionate about turning cutting-edge research into real-world "
            "solutions that scale."
        ),
        "roles": [
            "AI/ML Engineer",
            "Generative AI Engineer",
            "Data Scientist",
            "Agenitc System Developer",
        ],
    },
    "education": [
        {
            "degree": "B.Tech in Computer Science and Engineering (AI/ML)",
            "institution": "ABES Engineering College, Ghaziabad, UP",
            "years": "2021 – 2025",
        }
    ],
    "experience": [
        {
            "title": "AI/ML Engineer (Generative AI)",
            "company": "Opstree Solutions",
            "location": "Noida, UP",
            "dates": "July 2025 – Present",
            "technologies": [
                "Python",
                "LangChain",
                "LangGraph",
                "MCP",
                "Google Gemini",
                "Docker",
                "AWS Bedrock",
            ],
            "bullets": [
                "Developed an MCP Server for the REMS Observability & Monitoring Platform in Kubernetes using Python and FastMCP.",
                "Integrated real-time metrics, distributed tracing, and AI-powered diagnostics through the REMS API.",
                "Implemented 15+ API tools for CPU, memory, latency, and request-rate monitoring.",
                "Designed RESTful endpoints for trace analysis, log retrieval, and resource management.",
                "Built a custom MCP Client in LangChain + LangGraph using three agents: Planner (selects tools), Executor (executes plans), and Summarizer (interprets and summarizes results).",
                "Added automated analysis prompts for error detection and performance insights, with robust logging and exception handling.",
            ],
        },
        {
            "title": "AI/ML Engineer (Part Time)",
            "company": "Know Your Colleges (Izet Venture)",
            "location": "Ghaziabad, UP",
            "dates": "2024 – 2025",
            "technologies": [
                "OpenAI API",
                "GPT-3.5",
                "RAG",
                "Python",
                "NLP",
                "Docker",
            ],
            "bullets": [
                "Developed an AI-powered chatbot using GPT-3.5 + RAG for accurate, context-aware responses.",
                "Developed an intelligent recommendation engine matching students to suitable colleges using individual preferences, detailed college descriptions, and mentor guidance call transcripts.",
            ],
        },
    ],
    "skills": {
        "Programming Languages": ["Python"],
        "Data Analysis": ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
        "Machine Learning": ["Scikit-learn", "TensorFlow/Keras", "PyTorch"],
        "Computer Vision": ["OpenCV", "CNN", "YOLO", "Vision Transformers"],
        "Natural Language Processing": [
            "RNN",
            "LSTM",
            "NLTK",
            "Transformers",
            "LLM Fine-Tuning (LoRA, QLoRA)",
        ],
        "Generative & Agentic AI": [
            "LangChain",
            "LangGraph",
            "MCP",
            "Hugging Face",
            "CrewAI",
            "Groq",
            "Google's ADK",
        ],
        "Databases": ["MySQL", "MongoDB", "ChromaDB", "Pinecone", "Weaviate"],
        "AI/MLOps": ["FastAPI", "Git", "MLflow", "Docker", "DVC", "CI/CD"],
    },
    "projects": [
        {
            "name": "Multi-Agent Customer Support System",
            "technologies": ["LangChain", "LangGraph", "Groq", "Streamlit"],
            "description": "A multi-agent orchestration system for customer support, handling finance, content queries, and course advisory.",
            "demo_link": "#",
        },
        {
            "name": "AI Image Caption Recommendation System",
            "technologies": ["CLIP", "Streamlit", "NumPy", "PIL"],
            "description": "Built an AI system using CLIP to recommend high-quality social media captions based on image-content similarity.",
            "demo_link": "#",
        },
        {
            "name": "Resume–Job Description Matcher",
            "technologies": ["NLP", "Cosine Similarity", "Python", "Flask", "Streamlit"],
            "description": "Built an AI-driven resume ranking system using cosine similarity to match candidates to job descriptions.",
            "demo_link": "#",
        },
        {
            "name": "Twitter Sentiment Analyzer",
            "technologies": ["BERT", "NLP", "Deep Learning", "Streamlit", "Python"],
            "description": "Fine-tuned BERT on Twitter data and deployed a real-time sentiment analysis app using Streamlit.",
            "demo_link": "#",
        },
    ],
    "certifications": [
        {
            "name": "AWS AI/ML Fundamentals",
            "provider": "Udacity",
            "badge": "Gold Badge",
        },
        {
            "name": "Data Science Masters",
            "provider": "PW Skills",
            "badge": None,
        },
        {
            "name": "MLOps Bootcamp",
            "provider": "Krish Naik (Udemy)",
            "badge": None,
        },
    ],
    "stats": {
        "years_experience": "2+",
        "api_tools_built": "15+",
        "live_projects": "4+",
        "certifications_count": "3",
    },
}
