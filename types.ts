// Fix: Import React to use React.ReactNode type.
import React from 'react';

export interface Slide {
  id: number;
  title: string;
  tagline: string;
  imageUrl: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}Create a complete Admin CMS Dashboard for my website. 
The dashboard must include a secure login, content editor, media library, and settings panel.

Requirements:
- Build using Netlify CMS or a headless CMS compatible with static sites.
- Generate the full /admin folder structure:
   /admin/
       index.html
       config.yml
- index.html should load Netlify Identity Widget and CMS script.
- config.yml must include:
     backend: git-gateway
     media_folder: "assets/img"
     public_folder: "/assets/img"
     collections:
       - name: "posts"
         label: "Posts"
         folder: "content/posts"
         create: true
         fields:
           - { label: "Title", name: "title", widget: "string" }
           - { label: "Thumbnail", name: "thumbnail", widget: "image" }
           - { label: "Body", name: "body", widget: "markdown" }

Additional features:
- Admin UI must look modern, clean, and mobile responsive.
- Add automatic date, slug generation, and publish/draft status.
- Enable Netlify Identity Authentication.
- Provide the final code for index.html and config.yml.
- Provide deployment instructions for GitHub + Netlify Hosting.