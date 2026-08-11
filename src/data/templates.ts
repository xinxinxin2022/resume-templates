export interface Template {
  id: number
  name: string
  category: string
  style: string
  color: string
  pages: number
  description: string
  features: string[]
  preview: string
  downloadUrl: string
}

const categories = ['Professional', 'Creative', 'Modern', 'Elegant']
const styles = ['Minimalist', 'Two-Column', 'Timeline', 'Sidebar', 'Classic', 'Bold']
const colors = ['Black & White', 'Blue', 'Red', 'Green', 'Purple', 'Orange', 'Gray', 'Multi-Color']

const descriptions: Record<string, string[]> = {
  Professional: [
    'Clean and professional layout perfect for corporate positions. Features a structured format with clear sections for experience, education, and skills.',
    'Designed for executives and senior professionals. Emphasizes leadership experience and career achievements with an authoritative design.',
    'Ideal for finance, legal, and consulting roles. Conservative styling with emphasis on credentials and professional accomplishments.',
    'Perfect for management positions. Highlights team leadership, project management skills, and measurable business results.',
  ],
  Creative: [
    'Bold and eye-catching design for creative professionals. Perfect for designers, artists, and marketing roles where standing out matters.',
    'Modern creative layout with unique visual elements. Great for advertising, media, and design industry applications.',
    'Vibrant and expressive template that showcases your personality. Ideal for creative directors, UX designers, and brand strategists.',
    'Artistic design with creative use of color and typography. Perfect for portfolio submissions and creative industry applications.',
  ],
  Modern: [
    'Contemporary design with clean lines and ample white space. Suitable for tech, startup, and modern corporate environments.',
    'Sleek and minimalist approach that lets your content shine. Perfect for software engineers, product managers, and tech professionals.',
    'Forward-thinking design with modern typography and layout. Great for digital marketing, e-commerce, and online business roles.',
    'Streamlined professional template with a fresh aesthetic. Ideal for young professionals entering today\'s job market.',
  ],
  Elegant: [
    'Sophisticated and refined design for distinguished professionals. Perfect for academic, medical, and senior executive positions.',
    'Classic elegance meets modern functionality. Ideal for law firms, medical practices, and prestigious organizations.',
    'Timeless design with refined typography and balanced layout. Suitable for education, research, and professional services.',
    'Graceful and polished template that conveys credibility. Perfect for consultants, advisors, and established professionals.',
  ],
}

const featureSets: Record<string, string[][]> = {
  Professional: [
    ['ATS-Friendly Format', 'Clear Section Headers', 'Professional Typography', 'Print-Ready Layout'],
    ['Executive Summary Section', 'Achievement Highlights', 'Skills Matrix', 'References Page'],
    ['Two-Column Layout', 'Timeline Experience', 'Education Focus', 'Certification Section'],
    ['Leadership Highlights', 'Project Portfolio', 'Team Size Metrics', 'Revenue Impact'],
  ],
  Creative: [
    ['Portfolio Integration', 'Visual Skills Display', 'Creative Typography', 'Color Accents'],
    ['Photo Section Ready', 'Social Media Links', 'Project Gallery', 'Award Highlights'],
    ['Infographic Elements', 'Custom Icons', 'Bold Color Scheme', 'Unique Layout'],
    ['Design Showcase', 'Client Testimonials', 'Creative Process', 'Brand Colors'],
  ],
  Modern: [
    ['Clean Typography', 'White Space Design', 'Digital-First Layout', 'Mobile Preview'],
    ['Tech Skills Section', 'GitHub/Portfolio Links', 'Project Highlights', 'Open Source'],
    ['Startup-Ready Format', 'Growth Metrics', 'Product Launches', 'Agile Experience'],
    ['Minimal Design', 'Focus on Content', 'Easy to Customize', 'Quick Edit'],
  ],
  Elegant: [
    ['Classic Typography', 'Refined Layout', 'Academic Section', 'Publication List'],
    ['Professional References', 'Credential Highlights', 'Association Memberships', 'Speaking Engagements'],
    ['Research Section', 'Conference Presentations', 'Grant History', 'Peer Reviews'],
    ['Traditional Format', 'Honors Section', 'Professional Summary', 'Detailed Experience'],
  ],
}

export const CDN_BASE = import.meta.env.VITE_CDN_BASE || 'https://github.com/xinxinxin2022/resume-templates/releases/download/v1.0'

function generateTemplates(): Template[] {
  const templates: Template[] = []
  // Skip: folders 2,10 (missing) + 60,62,65,68 (visual duplicates)
  const SKIP = new Set([2, 10, 60, 62, 65, 68])

  for (let num = 1; num <= 70; num++) {
    if (SKIP.has(num)) continue

    const catIndex = (num - 1) % 4
    const styleIndex = (num - 1) % 6
    const colorIndex = (num - 1) % 8
    const descIndex = Math.floor((num - 1) / 4) % 4

    const category = categories[catIndex]
    const descList = descriptions[category]
    const featList = featureSets[category]

    // File extension: 29,31 are .doc; 70 is .zip; rest are .docx
    const ext = (num === 29 || num === 31) ? 'doc' : num === 70 ? 'zip' : 'docx'

    templates.push({
      id: num,
      name: `Resume Template ${num}`,
      category,
      style: styles[styleIndex],
      color: colors[colorIndex],
      pages: num % 3 === 0 ? 2 : 1,
      description: descList[descIndex],
      features: featList[descIndex],
      preview: `${CDN_BASE}/${num}.jpg`,
      downloadUrl: `${CDN_BASE}/${num}.${ext}`,
    })
  }

  return templates
}

export const templates = generateTemplates()

export const categoryInfo: Record<string, { title: string; description: string; icon: string }> = {
  Professional: {
    title: 'Professional Resumes',
    description: 'Clean, structured templates designed for corporate positions, executive roles, and traditional industries. These templates emphasize clarity, professionalism, and ATS compatibility.',
    icon: 'Briefcase',
  },
  Creative: {
    title: 'Creative Resumes',
    description: 'Bold, eye-catching designs for creative professionals in design, marketing, advertising, and media. Stand out with unique layouts and vibrant color schemes.',
    icon: 'Palette',
  },
  Modern: {
    title: 'Modern Resumes',
    description: 'Contemporary, minimalist templates perfect for tech companies, startups, and digital-first organizations. Clean lines and modern typography make your content shine.',
    icon: 'Zap',
  },
  Elegant: {
    title: 'Elegant Resumes',
    description: 'Sophisticated, refined designs for academic, medical, legal, and senior executive positions. Timeless elegance that conveys credibility and distinction.',
    icon: 'Crown',
  },
}
