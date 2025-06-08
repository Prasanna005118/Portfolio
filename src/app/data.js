/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Panacea AI",
    description: "Injury classification app using CNN, Streamlit frontend",
    details: `Panacea AI is a computer vision-based tool for classifying injuries from images using a CNN model. 
The app offers basic first aid suggestions based on detected injuries and severity. 
It was developed with Python and Streamlit, providing a simple and intuitive UI for users. 
The model was trained on a custom dataset with preprocessing steps for accurate results. 
Deployed at [panacea-ai.streamlit.app](https://panacea-ai.streamlit.app) for public access.`,
    date: "2024-12-01",
    demoLink: "https://panacea-ai.streamlit.app",
  },
  {
    id: 2,
    name: "Voice- & Gesture-Controlled 3D Game",
    description: "3D platformer with AI-based gesture and voice control",
    details: `This innovative 3D platformer game allows players to control character actions using hand gestures and voice commands. 
Gesture recognition was built using Mediapipe, while voice input relied on Google’s Speech SDK. 
Custom CNN models were trained to enhance recognition accuracy across environments. 
Developed in Unreal Engine, the game offers a futuristic interface and responsive gameplay. 
It showcases natural interaction in gaming and HCI use cases.`,
    date: "2024-12-15",
  },
  {
    id: 3,
    name: "Brigid Bloom",
    description: "Mental health chatbot using RAG model",
    details: `Brigid Bloom is a mental health chatbot powered by a Retrieval-Augmented Generation (RAG) pipeline. 
It uses embedded text data and cosine similarity to retrieve relevant context from a local knowledge base. 
The chatbot responds with empathy, drawing from mental health principles and LLM guidance. 
It was built with Ollama for local model inference and deployed via Streamlit. 
Brigid Bloom focuses on non-clinical support for stress, anxiety, and daily mental wellness.`,
    date: "2025-01-10",
  },
  {
    id: 4,
    name: "Note Nest",
    description: "YouTube to Sheet Music transcription app",
    details: `Note Nest converts YouTube music into readable sheet music PDFs using AI. 
It uses yt-dlp to extract audio, basic-pitch for pitch detection, and MuseScore for PDF rendering. 
The app includes waveform visualizations and a clean frontend with login via Google/GitHub. 
Built with Flask backend and deployed on Vercel and Cloudflare for speed and reach. 
Available live at [note-nest-flax.vercel.app](https://note-nest-flax.vercel.app).`,
    date: "2025-03-01",
    demoLink: "https://note-nest-flax.vercel.app",
  },
  {
    id: 5,
    name: "Avatar Lab",
    description: "Image/video + text to talking head generator",
    details: `Avatar Lab transforms a static image or video + text into a talking avatar. 
It uses TTS (text-to-speech) to generate audio and synchronizes lip movement with AI video models. 
The tool is modular: separate Flask services for TTS, avatar animation, and background editing. 
Designed for content creators, virtual assistants, and accessibility tools. 
Live demo at [echoframes.vercel.app](https://echoframes.vercel.app).`,
    date: "2025-03-10",
    demoLink: "https://echoframes.vercel.app",
  },
  {
    id: 6,
    name: "Svarog Sight",
    description: "Celestial body classifier",
    details: `Svarog Sight is a deep learning tool that classifies celestial objects: planets, galaxies, and meteorites. 
It uses a CNN trained on astronomy datasets curated from public telescopic archives. 
The interface allows users to upload images and receive predictions in real time. 
It supports researchers, educators, and enthusiasts exploring astrophotography. 
Built in Python with Streamlit, it bridges astronomy and accessible AI.`,
    date: "2024-11-15",
  },
  {
    id: 7,
    name: "Meme Generator",
    description: "Meme creator with GPT caption suggestions",
    details: `This web app lets users upload images, add text, and generate memes easily. 
It integrates GPT-3.5 to suggest witty captions based on the image and theme. 
Custom templates are available, and users can export memes as images. 
The interface was built using React and Tailwind CSS for a smooth UX. 
A creative tool for both casual users and social media marketers.`,
    date: "2025-02-20",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Prasanna005118",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/prasanna-kumar-kota-b54",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/KumarPras773",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


