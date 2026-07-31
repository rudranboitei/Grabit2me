import os
import re

pages_dir = "/home/rudra/Documents/Grabit2me/app"
pages = ["terms", "privacy", "dmca", "faq", "disclaimer", "contact"]

template = """import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: '{TITLE} - GrabIt2Me',
  description: '{DESC}',
};

export default function {COMPONENT_NAME}() {
  return (
    <div className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{TITLE}</h1>
            <p className="text-lg text-gray-500">{SUBTITLE}</p>
          </div>

          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
{CONTENT}
            <p className="text-sm text-gray-500 pt-8 border-t border-gray-100">Last updated: {DATE}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

def extract_sections(content):
    sections = []
    # Find all <section> tags
    section_pattern = re.compile(r'<section[^>]*>(.*?)</section>', re.DOTALL)
    for match in section_pattern.finditer(content):
        section_html = match.group(1)
        # Fix h2 classes
        section_html = re.sub(r'<h2[^>]*>', '<h2 className="text-2xl font-bold text-black">', section_html)
        # Fix ul classes
        section_html = re.sub(r'<ul[^>]*>', '<ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">', section_html)
        sections.append(f'            <section className="space-y-4">\n              {section_html.strip()}\n            </section>')
    
    if not sections:
        # If no sections, maybe there's a different structure (like Contact page)
        # Just grab everything inside CardContent
        card_content = re.search(r'<CardContent[^>]*>(.*?)</CardContent>', content, re.DOTALL)
        if card_content:
            inner = card_content.group(1)
            # Remove the last updated text if it exists
            inner = re.sub(r'<p className="text-xs text-steel-gray[^>]*>Last updated:.*?</p>', '', inner, flags=re.DOTALL)
            return inner.strip()
            
    return '\n'.join(sections)

import datetime
date_str = datetime.datetime.now().strftime("%B %d, %Y")

for page in pages:
    page_path = os.path.join(pages_dir, page, "page.tsx")
    if not os.path.exists(page_path):
        continue
        
    with open(page_path, "r") as f:
        content = f.read()
        
    # Extract metadata
    title_match = re.search(r"title:\s*'([^']+)'", content)
    desc_match = re.search(r"description:\s*'([^']+)'", content)
    
    title = title_match.group(1).split('-')[0].strip() if title_match else page.capitalize()
    if title == "Privacy policy": title = "Privacy Policy"
    
    desc = desc_match.group(1) if desc_match else f"{title} for GrabIt2Me"
    
    # Extract subtitle
    subtitle_match = re.search(r'<p className="text-sm text-steel-gray[^>]*>(.*?)</p>', content)
    subtitle = subtitle_match.group(1) if subtitle_match else ""
    
    # Extract content
    sections_html = extract_sections(content)
    
    component_name = page.capitalize() + "Page"
    
    new_content = template.replace("{TITLE}", title) \
                          .replace("{DESC}", desc) \
                          .replace("{COMPONENT_NAME}", component_name) \
                          .replace("{SUBTITLE}", subtitle) \
                          .replace("{CONTENT}", sections_html) \
                          .replace("{DATE}", date_str)
                          
    with open(page_path, "w") as f:
        f.write(new_content)

print("Pages updated successfully.")
