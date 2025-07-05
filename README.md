# 👕🎧 Outfit Vibe Music

*A fashion-meets-music web app that pairs your outfit's aesthetic with matching Spotify playlists.*  
Built for **Call2Code Hackathon 2025**.

---

## 🚀 Team
**Team Name:** Labubu Chasers  
**Hackathon:** Call2Code 2025  
**Members:** Ayush Kumar, Rajat Gupta, Shiv Sharma, Animesh Sharma

---


---

## 🌟 Features Implemented

### ✅ Easy Challenges
- **Dark Mode Support:** Toggle for user/system preference for better usability.
- **Creative 404/Error Handling:** Fun, emoji-rich error page with suggestions if the AI fails to detect an outfit.
- **Custom Loading States:** Animated, themed loading indicators during analysis.

### ✅ Medium Challenges
- **Dynamic Theming Based on API Data:** Sky background transitions based on time of day.
- **Multilingual Support:** One-click translation between English, Hindi, Tamil, Telugu, Bengali, and Marathi.

### ✅ Hard Challenges
- **Text-to-Speech for Content:** Web Speech API integration to read aloud any major text, with a global toggle for accessibility.

---

## ⚙️ APIs Used
- **Supabase**
  - Auth API for sign-up/login
  - Storage API for outfit image uploads
  - Database API for storing and fetching playlist mappings
- **AI Image Classification API** *(planned for production)* for automated vibe detection
- **Spotify Embed API** for streaming matching playlists
- **Web Speech API** for Text-to-Speech functionality

---

## 📸 Screenshots
| Screen | Description |
| ------ | ----------- |
| ![Screenshot 1](screenshot1.png) | Homepage with dynamic sky, dark mode toggle |
| ![Screenshot 2](screenshot2.png) | Outfit upload and preview screen |
| ![Screenshot 3](screenshot3.png) | Curated Spotify playlist recommendations |
| ![Screenshot 4](screenshot4.png) | Creative error page |
| ![Screenshot 5](screenshot5.png) | Manual vibe selection |
| ![Screenshot 6](screenshot6.png) | Text-to-Speech controls |
| ![Screenshot 7](screenshot7.png) | Multilingual support demo |
| ![Screenshot 8](screenshot8.png) | Custom loading state animation |
| ![Screenshot 9](screenshot9.png) | Live IST time display |
| ![Screenshot 10](screenshot10.png) | Sign-up/login with Supabase Auth |


---

## 🛠️ Tech Stack
- HTML, CSS, JavaScript
- Supabase (Auth, Storage, Database)
- Spotify Embed API
- Web Speech API

---

## 🌐 Link to Deployment
[**Live Demo Here**](https://outfit-vibe-music.vercel.app/)

---

## 🧪 Setup and Testing Instructions


1️⃣ Clone the repository:
```bash
git clone https://github.com/yourusername/outfit-vibe-music.git
cd outfit-vibe-music
2️⃣ Install dependencies (if using any, e.g. npm for frameworks):
bash
Copy
Edit
npm install
(Skip if pure HTML/CSS/JS.)

3️⃣ Add your Supabase project URL and Anon Key in supa-config.js:
javascript
Copy
Edit
const SUPABASE_URL = 'your-supabase-url';
const SUPABASE_ANON_KEY = 'your-anon-key';

4️⃣ Start a local server (optional for testing):
bash
Copy
Edit
npx live-server
Or simply open index.html in your browser.

5️⃣ Test Features:
Upload outfit photos

Try Manual Override

Check dynamic sky changes (day/night)

Toggle Dark Mode

Switch languages

Use Text-to-Speech

Observe creative error page by submitting blank or invalid images

<pre> ## 📦 File Structure ``` outfit-vibe-music/ ├── index.html ├── style.css ├── script.js ├── supa-config.js ├── config.js ├── favicon.png ├── screenshot1.png ├── screenshot2.png ├── screenshot3.png ├── screenshot4.png ├── screenshot5.png ├── screenshot6.png ├── screenshot7.png ├── screenshot8.png ├── screenshot9.png ├── screenshot10.png └── README.md ``` </pre>
