https://heimdallqc.com

# Heimdall QC - The plagiarism prevention engine

A content quality control service which automatically detects AI and plagiarism use in your website. Designed to prevent legal issues and SEO punishment over undisclosed AI use/duplicate content. Acts as a kind of digital circuit breaker, the last line of defence before issues arise. Uses Winston AI for the AI + Plagiarism detection.

There are two service plans - Extrinsic and Intrinsic. 

**Extrinsic**: For detecting suspicious content being submitted to your website. For things like review pages, blogs, social media etc.  
**Intrinsic**: (WIP) Will automatically audit your website for suspicious content on a schedule. Ideal for blog pages, information articles etc.  

The Extrinsic plan requires the SDK to get working - https://github.com/Riley-26/heimdallqc-sdk

## About

New issues to do with AI content are being discovered regularly. While businesses are scrambling to implement AI as much as they can, I thought it would be beneficial to try and find some safeguards. AI content detection is tricky to get right, LLMs are getting more powerful every day. Don't get me wrong, I'm definitely not against AI use (I'm guilty of using it quite a bit when making Heimdall!). But it is important to regulate things like this before the internet is overrun by misinformation - more so than it already is.

## How does it work

With a valid API key, the website owner links their site to Heimdall. Depending on the service plan, there may be some code to implement (check out the SDK, it's nothing too complicated). When submissions are made, or an audit takes place, the system analyses the given text. If a text is flagged as suspicious (either containing AI content or plagiarism), a new entry will show up in the dashboard containing the text. Texts with signs of plagiarism will be marked 'Action Needed', and an email will be sent. 

It is crucial to edit/remove the text as soon as possible to prevent crawlers or people from potentially reporting the content.

A new text gets be generated which replaces the suspicious text with a configured placeholder (defaults to [CONTENT UNDER REVIEW]). If a webhook is linked, the system will send this new text to it and you can do with it as you like in your webhook endpoint.

## Architecture

### Frontend

Next.js made perfect sense to use for its server-side utilities. Things like middleware, proxy routes and JWT generation and validation were much easier to implement, saving me a lot of time. TailwindCSS for styling, and Typescript for type safety.

### Backend

To keep the backend simple, I used Python with FastAPI. For the database and data models ORM, I stuck with SQLAlchemy as it works perfectly with Python. It came in useful when making Pythonic (is that a word?) data schemas and objects, much easier to read and debug this way as it follows OOP layouts. Alembic made the database version control straight-forward, and I was able to use natural language to make edits to the tables.

## Key decisions

- My initial idea was to identify AI content via user behaviour, i.e. copy/pasting, window changes. Was difficult to implement and felt too intrusive. I opted for a safer approach, more in line with AI/plagiarism prevention rather than surveillance.
- Instead of removing the text, I planned to have multiple settings which modified the suspicious text. There was an AI rewrite setting - in hindsight this made no sense, replacing AI text with more AI text. There was also an auto-citation setting, but this was too difficult to get working consistently, it would have to be perfect to achieve the goal of preventing legal issues. The simplest solution was best - a simple text replacement to show that the text was under review.
- The Extrinsic plan was the only planned plan (say that 3 times fast). But this missed a key assumption, it only worked on input fields. So, I made the Intrinsic plan to fill some of the holes. A scheduled site audit would find content that had been missed by human checking, without interfering with other processes.
- Built the SDK in React initially due to market share, I planned to build an SDK for more languages if it picked up.
- Implemented Cloudflare for rate limiting and caching.
