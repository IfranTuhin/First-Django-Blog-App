from django.shortcuts import render

def home(request):
    featured_post = {
        'id': 0,
        'title': 'Mastering Django 6: Building Scalable & Modern Web Applications',
        'category': 'Django & Python',
        'read_time': '6 min read',
        'date': 'Oct 7, 2026',
        'author': 'Ifran Tuhin',
        'summary': 'Explore the latest architecture paradigms, async ORM advancements, clean folder structures, and professional production patterns for modern Django projects.',
        'tag': 'Featured Spotlight'
    }
    
    posts = [
        {
            'id': 1,
            'title': 'The Modern CSS Architecture: Glassmorphism, CSS Grid & Micro-Interactions',
            'category': 'Frontend & UI',
            'read_time': '5 min read',
            'date': 'Oct 5, 2026',
            'author': 'Ifran Tuhin',
            'summary': 'Transform your web apps into premium digital experiences using CSS variables, responsive fluid typography, and subtle micro-animations.',
            'tag': 'Design System',
            'accent_class': 'card-1'
        },
        {
            'id': 2,
            'title': 'Clean Architecture in Django: Service Layers, Signals & Decoupled Logic',
            'category': 'Django & Python',
            'read_time': '8 min read',
            'date': 'Oct 2, 2026',
            'author': 'Ifran Tuhin',
            'summary': 'Keep your views thin and business logic decoupled with clean service layer patterns, repository structures, and maintainable architecture.',
            'tag': 'Architecture',
            'accent_class': 'card-2'
        },
        {
            'id': 3,
            'title': 'Generative AI Workflows: Integrating Gemini API in Web Applications',
            'category': 'AI & ML',
            'read_time': '7 min read',
            'date': 'Sep 28, 2026',
            'author': 'Ifran Tuhin',
            'summary': 'A practical step-by-step walkthrough of building intelligent features, structured outputs, and multimodal assistants into Django backends.',
            'tag': 'Artificial Intelligence',
            'accent_class': 'card-3'
        },
        {
            'id': 4,
            'title': 'Core Web Vitals & Sub-Second Page Performance Optimization',
            'category': 'Performance',
            'read_time': '4 min read',
            'date': 'Sep 22, 2026',
            'author': 'Ifran Tuhin',
            'summary': 'How to optimize Largest Contentful Paint (LCP), reduce JavaScript execution overhead, and achieve top Lighthouse performance scores.',
            'tag': 'Optimization',
            'accent_class': 'card-4'
        },
        {
            'id': 5,
            'title': 'Full-Stack Developer Roadmap 2026: From Fundamentals to Mastery',
            'category': 'Career & Tips',
            'read_time': '9 min read',
            'date': 'Sep 18, 2026',
            'author': 'Ifran Tuhin',
            'summary': 'The essential technical skills, design standards, and system design insights needed to thrive as an engineering leader today.',
            'tag': 'Engineering Guide',
            'accent_class': 'card-5'
        },
        {
            'id': 6,
            'title': 'Production Deployment Playbook: Docker, Nginx, SSL and CI/CD',
            'category': 'DevOps',
            'read_time': '10 min read',
            'date': 'Sep 12, 2026',
            'author': 'Ifran Tuhin',
            'summary': 'A hardened checklist for deploying Django applications securely with containerization, reverse proxying, and automated testing pipelines.',
            'tag': 'Cloud & DevOps',
            'accent_class': 'card-6'
        },
    ]

    categories = ['All', 'Django & Python', 'Frontend & UI', 'AI & ML', 'Performance', 'Career & Tips', 'DevOps']

    context = {
        'featured_post': featured_post,
        'posts': posts,
        'categories': categories,
    }
    return render(request, 'home.html', context)

def about(request):
    author = {
        'name': 'Ifran Tuhin',
        'title': 'Full-Stack Software Engineer & Tech Creator',
        'bio': 'Passionate about engineering elegant backend architectures, building fast and modern user interfaces, and sharing actionable insights with fellow developers around the world.',
        'articles_count': 54,
        'readers_count': '18K+',
        'rating': '4.9/5',
        'experience_years': '4+ Years',
    }
    return render(request, 'blog/about.html', {'author': author})
