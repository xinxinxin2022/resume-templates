<template>
  <div class="py-12" v-if="post">
    <div class="max-w-3xl mx-auto px-4">
      <router-link to="/blog" class="text-blue-600 hover:underline mb-4 inline-block">{{ t('blogPost.back') }}</router-link>
      <div class="text-sm text-gray-500 mb-2">{{ post.date }} · {{ post.category }}</div>
      <h1 class="text-4xl font-bold mb-6">{{ post.title }}</h1>
      <div class="prose prose-lg text-gray-700" v-html="post.content"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const allPosts: Record<string, { date: string; category: string; title: string; content: string }> = {
  'how-to-write-resume-2026': {
    date: 'Aug 10, 2026', category: 'Guide',
    title: 'How to Write a Resume in 2026: Complete Guide',
    content: `<h2>Introduction</h2><p>Writing a resume in 2026 requires understanding both traditional best practices and modern trends. With AI-powered Applicant Tracking Systems (ATS) screening most applications before human eyes see them, your resume needs to be optimized for both machines and people.</p>
    <h2>Step 1: Choose the Right Format</h2><p>The three main resume formats are chronological, functional, and combination. For most job seekers in 2026, the reverse-chronological format remains the gold standard. It lists your most recent experience first and provides a clear career progression timeline.</p>
    <h2>Step 2: Write a Strong Summary</h2><p>Replace the outdated "Objective" statement with a Professional Summary. This 2-3 sentence paragraph should highlight your top achievements, key skills, and what you bring to the role. Think of it as your elevator pitch on paper.</p>
    <h2>Step 3: Detail Your Experience</h2><p>For each position, include your title, company, dates, and 3-5 bullet points describing achievements. Use action verbs and quantify results wherever possible. Instead of "Managed a team," write "Led a cross-functional team of 8 to deliver a $2M project 2 weeks ahead of schedule."</p>
    <h2>Step 4: Optimize for ATS</h2><p>Include relevant keywords from the job description. Use standard section headings (Experience, Education, Skills). Avoid complex formatting, tables, and graphics that ATS systems can't parse. Our templates are all ATS-friendly.</p>
    <h2>Step 5: Review and Polish</h2><p>Proofread carefully — even one typo can eliminate you from consideration. Ask a friend or mentor to review. Keep it to 1-2 pages maximum. Save as PDF before submitting unless the employer specifically requests a Word document.</p>
    <h2>Conclusion</h2><p>A great resume is your ticket to interviews. Use our free templates as a starting point, customize with your unique experience, and you'll be well on your way to landing your next role.</p>`
  },
  'resume-vs-cv': {
    date: 'Aug 8, 2026', category: 'Tips',
    title: 'Resume vs CV: What\'s the Difference?',
    content: `<h2>The Key Difference</h2><p>A resume is a concise 1-2 page document summarizing your skills and experience for a specific job. A CV (Curriculum Vitae) is a comprehensive multi-page document detailing your entire academic and professional history.</p>
    <h2>When to Use a Resume</h2><p>Use a resume when applying for industry jobs in the US and Canada. Resumes are expected for corporate, tech, creative, and most non-academic positions. Keep it focused and relevant to the specific role.</p>
    <h2>When to Use a CV</h2><p>Use a CV when applying for academic positions, research roles, fellowships, or grants. CVs are also standard in the UK, Europe, and other regions outside North America. Include publications, presentations, teaching experience, and research.</p>
    <h2>Length</h2><p>Resumes: 1-2 pages maximum. CVs: No length limit — include everything relevant. A senior academic might have a 10+ page CV.</p>
    <h2>Content Focus</h2><p>Resumes emphasize skills and achievements relevant to the target job. CVs emphasize academic credentials, research, and scholarly contributions.</p>`
  },
  'ats-friendly-resume': {
    date: 'Aug 5, 2026', category: 'Tips',
    title: 'How to Make Your Resume ATS-Friendly',
    content: `<h2>What Is an ATS?</h2><p>An Applicant Tracking System (ATS) is software used by over 99% of large companies and 75% of mid-sized companies to filter resumes before a human ever sees them. When you submit a resume online, it's likely being parsed by an algorithm that scores it based on keyword matches, formatting, and relevance to the job description.</p>
    <h2>Why Formatting Matters</h2><p>ATS software reads your resume as plain text. Complex layouts with text boxes, columns, tables, headers/footers, and graphics can confuse the parser, causing it to miss or misread your information. Stick to single-column layouts with standard section headings like "Work Experience," "Education," and "Skills." Avoid using images, charts, or icons to represent information.</p>
    <h2>Keyword Optimization</h2><p>Carefully read the job description and identify the key skills, qualifications, and terminology the employer uses. Mirror these keywords naturally throughout your resume. If the posting says "project management" and "Agile methodology," those exact phrases should appear in your experience or skills section. Don't keyword-stuff — context matters. The ATS scores relevance, not just frequency.</p>
    <h2>File Format</h2><p>Unless the application specifically requests a PDF, submit your resume as a .docx file. Word documents are the easiest for ATS systems to parse accurately. If you must use PDF, ensure it's text-based (not a scanned image) and doesn't use unusual fonts or encoding.</p>
    <h2>Section Headings</h2><p>Use standard, predictable section headings. The ATS is programmed to look for specific terms. Use "Work Experience" or "Professional Experience" — not "My Journey" or "Career Highlights." Similarly, use "Education," "Skills," and "Certifications." Creativity in headings can cause the parser to skip entire sections.</p>
    <h2>Common ATS Mistakes</h2><ul><li>Using headers/footers for contact info — many ATS can't read them</li><li>Including photos or graphics</li><li>Using creative fonts or unusual characters</li><li>Saving as PDF when .docx is preferred</li><li>Using tables to organize information</li><li>Naming your file "resume.pdf" instead of "FirstName_LastName_Resume.docx"</li></ul>
    <h2>How to Test Your Resume</h2><p>Copy all the text from your resume and paste it into a plain text editor. If the content is scrambled, missing sections, or unreadable, the ATS will have the same problem. Our templates are designed with ATS compatibility in mind — clean formatting, standard headings, and parser-friendly structure.</p>`
  },
  'best-resume-fonts': {
    date: 'Aug 3, 2026', category: 'Design',
    title: 'The 10 Best Fonts for Your Resume',
    content: `<h2>Why Font Choice Matters</h2><p>Your resume font communicates professionalism before a single word is read. The right font makes your document easy to scan, aesthetically pleasing, and appropriate for your industry. The wrong font can make your resume look dated, amateurish, or difficult to read. Here are the 10 best fonts for resumes in 2026.</p>
    <h2>1. Calibri</h2><p>The default Microsoft Word font for good reason. Calibri is clean, modern, and universally readable. It works at any size and on any screen. If you're unsure what to use, Calibri is a safe, professional choice that won't distract from your content.</p>
    <h2>2. Arial</h2><p>A classic sans-serif font that's been a resume staple for decades. Arial is extremely readable and works well for both digital and printed resumes. It's slightly less distinctive than newer fonts, but its ubiquity means it renders perfectly on every system.</p>
    <h2>3. Garamond</h2><p>An elegant serif font that conveys sophistication and tradition. Garamond is ideal for academic, legal, and executive resumes. It has a refined, timeless quality that suggests attention to detail and professionalism. Use at 12pt or larger — Garamond runs smaller than other fonts.</p>
    <h2>4. Georgia</h2><p>Designed specifically for screen readability, Georgia is an excellent choice for resumes submitted electronically. It has a warm, approachable feel while maintaining professional gravitas. Works well for creative and tech industries.</p>
    <h2>5. Helvetica</h2><p>A favorite among designers, Helvetica is the gold standard of clean, neutral typography. It conveys modernity and precision. If you're in design, architecture, or tech, Helvetica signals that you understand visual communication.</p>
    <h2>6. Cambria</h2><p>A sturdy serif font designed for on-screen reading. Cambria has strong, clear letterforms that hold up well at small sizes. It's professional without being stuffy — a good middle ground between traditional and modern.</p>
    <h2>7. Avenir</h2><p>A geometric sans-serif with a contemporary feel. Avenir is clean and slightly more distinctive than Arial while remaining highly readable. Great for startups, tech companies, and creative roles where you want to signal modernity.</p>
    <h2>8. Times New Roman</h2><p>The traditional default. While some argue it's overused, Times New Roman remains perfectly acceptable for conservative industries like law, finance, and academia. It's compact, allowing more content per page. Just be aware it can look generic.</p>
    <h2>9. Constantia</h2><p>A modern serif with rounded letterforms that feels both professional and approachable. Constantia works well at smaller sizes and has excellent readability. It's a good alternative to Times New Roman when you want something slightly more contemporary.</p>
    <h2>10. Rubik</h2><p>A modern, slightly geometric sans-serif that works well for creative and tech resumes. Rubik has personality without being unprofessional. Use it for digital-first applications where you want to stand out subtly.</p>
    <h2>Font Size Guidelines</h2><p>Body text: 10-12pt. Never go below 10pt — recruiters need to read your resume quickly, and tiny text creates friction. Headings: 14-16pt for section headers, 12-14pt for your name. Your name can be larger (18-24pt) to create visual hierarchy.</p>
    <h2>What to Avoid</h2><p>Never use decorative, script, or novelty fonts on your resume. Comic Sans, Papyrus, Brush Script — these signal immaturity and poor judgment. Also avoid ultra-thin or ultra-bold fonts that sacrifice readability for style.</p>`
  },
  'resume-action-verbs': {
    date: 'Jul 30, 2026', category: 'Tips',
    title: '200+ Powerful Action Verbs for Your Resume',
    content: `<h2>Why Action Verbs Matter</h2><p>Every bullet point on your resume should start with a strong action verb. Weak verbs like "responsible for," "helped with," or "worked on" make your accomplishments sound passive and vague. Power verbs convey impact, ownership, and results. They transform "Responsible for sales" into "Drove $2.5M in revenue growth." The difference is dramatic.</p>
    <h2>Leadership & Management</h2><p>Led, Directed, Orchestrated, Spearheaded, Mentored, Supervised, Championed, Cultivated, Delegated, Mobilized, Galvanized, Steered, Navigated, Consolidated, Unified, Recruited, Appointed, Executed, Governed, Oversaw.</p>
    <h2>Achievement & Results</h2><p>Achieved, Exceeded, Delivered, Surpassed, Maximized, Accelerated, Boosted, Generated, Produced, Attained, Realized, Outperformed, Pioneered, Secured, Awarded, Recognized, Triumphed, Resolved, Revitalized, Transformed.</p>
    <h2>Communication & Interpersonal</h2><p>Presented, Persuaded, Negotiated, Collaborated, Articulated, Facilitated, Mediated, Advised, Consulted, Influenced, Advocated, Briefed, Conveyed, Corresponded, Liaised, Promoted, Publicized, Responded, Addressed, Clarified.</p>
    <h2>Analysis & Research</h2><p>Analyzed, Assessed, Evaluated, Investigated, Diagnosed, Identified, Quantified, Mapped, Forecasted, Projected, Extrapolated, Surveyed, Reviewed, Audited, Examined, Interpreted, Clarified, Synthesized, Correlated, Determined.</p>
    <h2>Creation & Innovation</h2><p>Designed, Developed, Engineered, Architected, Constructed, Formulated, Conceptualized, Launched, Established, Introduced, Originated, Customized, Integrated, Restructured, Modernized, Streamlined, Overhauled, Enhanced, Upgraded, Innovated.</p>
    <h2>Organization & Planning</h2><p>Organized, Coordinated, Scheduled, Planned, Prioritized, Catalogued, Systematized, Standardized, Aligned, Allocated, Budgeted, Administered, Managed, Scheduled, Compiled, Documented, Filed, Maintained, Monitored, Tracked.</p>
    <h2>Financial & Quantitative</h2><p>Reduced, Cut, Decreased, Saved, Conserved, Yielded, Earned, Profit ed, Calculated, Computed, Balanced, Projected, Appraised, Valued, Estimated, Administered, Adjusted, Reconciled, Allocated, Optimized.</p>
    <h2>Teaching & Development</h2><p>Trained, Coached, Educated, Taught, Instructed, Guided, Tutored, Prepared, Developed, Mentored, Facilitated, Demonstrated, Explained, Enabled, Empowered, Inspired, Motivated, Encouraged, Stimulated, Cultivated.</p>
    <h2>How to Use Action Verbs Effectively</h2><p>Start every bullet point with a past-tense action verb for previous roles (Led, Managed, Created) and present-tense for current roles (Lead, Manage, Create). Vary your verbs — don't use "Managed" five times in one section. Match the verb's intensity to the achievement — "Spearheaded" for major initiatives, "Coordinated" for routine tasks.</p>
    <h2>Pair Verbs with Numbers</h2><p>Action verbs are strongest when paired with quantifiable results. "Increased sales by 45% in Q3" beats "Increased sales." "Reduced processing time from 5 days to 8 hours" tells a complete story. Always follow the pattern: Action Verb + Task + Measurable Result.</p>`
  },
  'one-page-resume': {
    date: 'Jul 28, 2026', category: 'Tips',
    title: 'Should Your Resume Be One Page?',
    content: `<h2>The One-Page Rule</h2><p>For decades, career experts have debated whether resumes should be limited to one page. The answer depends on your experience level, industry, and the specific role you're targeting. Here's a clear framework to decide.</p>
    <h2>When One Page Is Best</h2><p><strong>Students and recent graduates:</strong> With limited work experience, a one-page resume forces you to be selective and highlight only the most relevant achievements. Recruiters spend 6-7 seconds on an initial scan — don't make them dig.</p>
    <p><strong>Professionals with under 10 years of experience:</strong> You should be able to distill your career into one powerful page. Focus on the last 2-3 positions and your most impressive achievements. Remove outdated or irrelevant roles.</p>
    <p><strong>Career changers:</strong> A one-page format forces you to focus on transferable skills and the most relevant experience, rather than listing every position you've ever held.</p>
    <h2>When Two Pages Are Acceptable</h2><p><strong>Senior professionals and executives:</strong> If you have 10+ years of relevant experience, multiple significant achievements, publications, or major projects, two pages are appropriate. But every line must earn its place.</p>
    <p><strong>Technical and academic roles:</strong> Engineers, scientists, and academics may need space for publications, patents, technical skills, and project portfolios. Two pages are standard in these fields.</p>
    <p><strong>Extensive relevant achievements:</strong> If removing content would weaken your candidacy — for example, cutting a major project that directly relates to the target role — keep it on a second page rather than omitting it entirely.</p>
    <h2>The Second Page Rule</h2><p>If your resume extends to a second page, that page should be at least half full. A second page with only 3-4 lines looks careless. Aim for the second page to have at least 50% of its space filled with meaningful content.</p>
    <h2>Never Go Beyond Two Pages</h2><p>Regardless of your experience level, never exceed two pages. If you can't fit your qualifications into two pages, you're including too much irrelevant information or not being concise enough. The exception is academic CVs, which have no length limit.</p>
    <h2>Tips for Keeping It Concise</h2><ul><li>Remove positions older than 15 years unless they're directly relevant</li><li>Summarize early career roles in a "Previous Experience" section without bullet points</li><li>Limit each position to 3-5 bullet points — only your strongest achievements</li><li>Remove "References available upon request" — it's assumed</li><li>Trim your skills section to the most relevant 8-12 skills</li><li>Use concise language: "Managed 12-person team" instead of "Was responsible for managing a team of 12 people"</li></ul>
    <h2>The Recruiter's Perspective</h2><p>Recruiters review hundreds of resumes daily. A concise, focused one-page resume that demonstrates your ability to communicate efficiently is almost always more impressive than a bloated two-page document. Quality over quantity, always.</p>`
  },
  'resume-for-career-change': {
    date: 'Jul 25, 2026', category: 'Guide',
    title: 'How to Write a Resume for a Career Change',
    content: `<h2>The Career Change Challenge</h2><p>Changing careers means your resume needs to tell a different story. You're not just listing your history — you're making a case for why your past experience makes you ideal for a completely different field. This requires strategy, selective presentation, and a focus on transferable skills.</p>
    <h2>Lead with a Strong Summary</h2><p>Your professional summary becomes critical when changing careers. Use it to explicitly connect your past experience to your target role. "Marketing professional with 8 years of data analysis experience transitioning to business intelligence roles. Proven ability to translate complex data into actionable strategies that drive revenue growth." This immediately tells the reader your story and your value.</p>
    <h2>Identify Your Transferable Skills</h2><p>Every career develops skills that apply elsewhere. A teacher has presentation, curriculum design, and stakeholder management skills. A nurse has crisis management, attention to detail, and cross-functional collaboration skills. A journalist has research, deadline management, and communication skills. List the skills from your current career that your target industry values most.</p>
    <h2>Reframe Your Experience</h2><p>Don't just copy your old job descriptions. Rewrite your bullet points to emphasize achievements that resonate in your target field. A project manager moving to sales might write: "Built and maintained relationships with 15+ client stakeholders, resulting in 95% retention rate and $3M in repeat business." The same experience, framed for sales.</p>
    <h2>Use a Functional or Hybrid Format</h2><p>While chronological resumes are standard, career changers may benefit from a hybrid format that leads with a "Relevant Skills" section before the work history. Group your achievements by skill area rather than by job title. This draws attention to what you can do rather than where you did it.</p>
    <h2>Address the Gap Directly</h2><p>Don't try to hide your career change. Recruiters will notice anyway. Instead, own it: mention any relevant coursework, certifications, volunteer work, or side projects you've completed in your new field. Show commitment and proactive learning.</p>
    <h2>Leverage Your Network</h2><p>A resume alone rarely makes a career change happen. Combine your resume with networking, informational interviews, and LinkedIn outreach. A referral from someone in the industry can overcome the "no relevant experience" objection that an ATS might raise.</p>
    <h2>Tailor for Every Application</h2><p>Career change resumes need more customization than standard resumes. For each application, carefully read the job description and adjust your summary, skills section, and bullet points to emphasize the most relevant aspects of your background. One resume won't work for every target role.</p>`
  },
  'cover-letter-guide': {
    date: 'Jul 22, 2026', category: 'Guide',
    title: 'Cover Letter Writing Guide 2026',
    content: `<h2>Is the Cover Letter Still Relevant?</h2><p>Yes. While many applicants skip the cover letter, submitting one gives you a significant advantage. A well-crafted cover letter tells the story your resume can't — why you're interested in this specific role, what motivates you, and how your unique background makes you the ideal candidate. In competitive job markets, the cover letter is often the differentiator.</p>
    <h2>Structure of a Strong Cover Letter</h2><p><strong>Opening (1 paragraph):</strong> Hook the reader immediately. Mention the specific role, how you found it, and one compelling reason you're excited about it. If you have a referral or connection, mention it here. Avoid generic openings like "I am writing to apply for..."</p>
    <p><strong>Body (1-2 paragraphs):</strong> This is where you connect your experience to the role's requirements. Don't repeat your resume — instead, tell a brief story that demonstrates your qualifications. Use a specific achievement that showcases the skills the employer needs.</p>
    <p><strong>Closing (1 paragraph):</strong> Reiterate your enthusiasm, mention that your resume is attached, and include a call to action. "I'd welcome the opportunity to discuss how my experience in X can contribute to your team's goals in Y." Then thank them for their time.</p>
    <h2>Customization Is Essential</h2><p>Generic cover letters are worse than no cover letter. Every cover letter should mention the company by name, reference specific aspects of the job description, and explain why this particular role at this particular company excites you. Research the company's mission, recent news, or projects and reference them.</p>
    <h2>Keep It Concise</h2><p>A cover letter should never exceed one page. Aim for 250-400 words in 3-4 paragraphs. Recruiters are busy — respect their time while making every word count.</p>
    <h2>Match Your Resume Style</h2><p>Your cover letter should visually complement your resume. Use the same font, similar formatting, and consistent design elements. This creates a cohesive personal brand and shows attention to detail.</p>
    <h2>Common Cover Letter Mistakes</h2><ul><li>Repeating your resume verbatim</li><li>Using a generic template without customization</li><li>Writing too much — keep it to one page</li><li>Focusing on what you want rather than what you offer</li><li>Using clichés like "I'm a team player" or "I think outside the box"</li><li>Forgetting to proofread — typos in a cover letter are fatal</li><li>Not including a specific call to action</li></ul>
    <h2>The 2026 Approach</h2><p>In 2026, many applications are submitted through online portals where the cover letter is optional. Make it mandatory for yourself. When the application says "optional," that's your opportunity to stand out from the 80% of candidates who skip it. A personalized, compelling cover letter shows genuine interest and communication skills that a resume alone can't convey.</p>`
  },
  'resume-mistakes': {
    date: 'Jul 20, 2026', category: 'Tips',
    title: '10 Common Resume Mistakes to Avoid',
    content: `<h2>Mistake #1: Typos and Grammar Errors</h2><p>One typo can get your resume rejected. Recruiters interpret typos as carelessness — if you can't proofread your own resume, how can they trust you with detailed work? Run spell check, read it backward, and have someone else review it.</p>
    <h2>Mistake #2: Using an Unprofessional Email</h2><p>partyguy2003@email.com has no place on a professional resume. Use a simple email format: firstname.lastname@gmail.com. If your current email isn't professional, create a new one — it takes two minutes.</p>
    <h2>Mistake #3: Including a Photo (in the US/UK)</h2><p>In the US and UK, including a photo on your resume can actually hurt you. Anti-discrimination laws mean companies don't want to see demographic information that could bias the process. Photos are expected in some European and Asian countries — know your market.</p>
    <h2>Mistake #4: Listing References</h2><p>"References available upon request" wastes valuable space. Employers know they can ask for references — you don't need to state the obvious. Use that space for achievements instead.</p>
    <h2>Mistake #5: Writing an Objective Statement</h2><p>"Seeking a challenging role where I can grow my skills..." tells the employer nothing about what you offer. Replace the objective with a Professional Summary that highlights your key achievements and the specific value you bring.</p>
    <h2>Mistake #6: Including Irrelevant Experience</h2><p>Your college job as a barista isn't relevant to a senior engineering role (unless you're a recent graduate with limited experience). Be selective — include only positions that demonstrate skills applicable to your target role.</p>
    <h2>Mistake #7: Using Fancy Templates That ATS Can't Read</h2><p>A beautifully designed resume is useless if the ATS can't parse it. Avoid text boxes, graphics, unusual fonts, columns, and complex layouts. Clean, simple formatting ensures your resume reaches human eyes.</p>
    <h2>Mistake #8: Not Quantifying Achievements</h2><p>"Improved sales performance" means nothing. "Increased quarterly sales by 35%, generating $1.2M in additional revenue" tells a complete story. Every bullet point should include numbers: revenue, percentages, team sizes, project timelines, cost savings.</p>
    <h2>Mistake #9: Making It Too Long</h2><p>Unless you're a senior executive or academic, your resume should be 1-2 pages maximum. Recruiters spend 6-7 seconds on the initial scan. If they can't find your key qualifications in that time, your resume is too long or poorly organized.</p>
    <h2>Mistake #10: Using the Same Resume for Every Application</h2><p>Every job is different. Your resume should be tailored for each application. Read the job description, identify the key requirements, and adjust your summary, skills, and bullet points to emphasize what matters most for that specific role. One-size-fits-all resumes get one-size-fits-all results: rejection.</p>`
  },
  'linkedin-vs-resume': {
    date: 'Jul 18, 2026', category: 'Tips',
    title: 'LinkedIn Profile vs Resume: Key Differences',
    content: `<h2>Same Professional, Different Documents</h2><p>Your resume and LinkedIn profile tell the same story — your professional journey — but they're optimized for completely different contexts. Understanding these differences is crucial for maximizing your job search effectiveness.</p>
    <h2>Length and Detail</h2><p><strong>Resume:</strong> 1-2 pages maximum. Highly curated, focused on the most relevant experience for a specific role. Every word earns its place.</p>
    <p><strong>LinkedIn:</strong> No length restrictions. Include your complete work history, all skills, recommendations, certifications, publications, projects, and volunteer work. Think of it as your comprehensive professional record.</p>
    <h2>Customization</h2><p><strong>Resume:</strong> Tailored for every single application. You adjust your summary, reorder bullet points, and emphasize different skills based on the specific job description.</p>
    <p><strong>LinkedIn:</strong> One profile that represents your overall professional brand. It can't be customized for each application, so it needs to communicate your broad value proposition clearly.</p>
    <h2>Tone and Voice</h2><p><strong>Resume:</strong> Third-person implied, no pronouns. "Managed a team of 12" — not "I managed." Formal, concise, achievement-oriented.</p>
    <p><strong>LinkedIn:</strong> First person is acceptable and often preferred. "I led a team of 12 engineers through a major product launch." More conversational, with room for personality and storytelling.</p>
    <h2>Keywords and SEO</h2><p><strong>Resume:</strong> Keywords should match the specific job description. You're optimizing for the ATS and the recruiter reviewing that particular role.</p>
    <p><strong>LinkedIn:</strong> Keywords should reflect your industry, role, and the positions you're targeting broadly. Think about what recruiters search for when looking for candidates with your skills. Include these in your headline, summary, skills section, and experience descriptions.</p>
    <h2>Visual Elements</h2><p><strong>Resume:</strong> Minimal. Clean formatting, professional font, maybe a subtle color accent. No photos (in US/UK), no graphics.</p>
    <p><strong>LinkedIn:</strong> Rich media is encouraged. Add a professional headshot, background banner, portfolio links, presentations, videos, and project samples. LinkedIn is your chance to show, not just tell.</p>
    <h2>Social Proof</h2><p><strong>Resume:</strong> No space for recommendations or endorsements. You claim your achievements and back them up with numbers.</p>
    <p><strong>LinkedIn:</strong> Recommendations from colleagues, managers, and clients add powerful third-party validation. Skill endorsements (while not heavily weighted) add credibility. Ask 3-5 people for recommendations highlighting different strengths.</p>
    <h2>How to Use Both Effectively</h2><p>Use LinkedIn as your living professional portfolio — keep it comprehensive and current. Use your resume as a precision tool — tailored, focused, and optimized for each specific application. When applying for a job, ensure your LinkedIn profile is consistent with your resume but don't try to make them identical. They serve different purposes in your job search strategy.</p>`
  },
}

const post = computed(() => {
  const p = allPosts[slug.value]
  if (!p) return null
  return { ...p, slug: slug.value }
})
</script>
