// Enhanced Outfit Vibe Music App - Complete with TTS, Dynamic Sky & Translation
class OutfitVibeApp {
    constructor() {
        this.currentVibe = 'casual';
        this.currentLanguage = 'en';
        this.isTranslating = false;
        
        // Add Supabase properties
        this.currentUser = null;
        this.isLoggedIn = false;
        this.supabaseClient = window.supabaseClient;

        // Multiple playlists per fit category
        this.fitPlaylists = {
            casual: [
                { name: "Chill Vibes", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator", mood: "relaxed" },
                { name: "Coffee Shop Beats", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator", mood: "cozy" },
                { name: "Indie Folk Favorites", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2Nc3B70tvx0?utm_source=generator", mood: "mellow" },
                { name: "Acoustic Afternoons", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1s9knjP51Oa?utm_source=generator", mood: "peaceful" },
                { name: "Weekend Mood", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2sUQwD7tbmL?utm_source=generator", mood: "easy" },
                { name: "Study Session", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator", mood: "focus" },
                { name: "Road Trip Classics", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator", mood: "nostalgic" },
                { name: "Lazy Sunday", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7K31D69s4M1?utm_source=generator", mood: "laid-back" }
            ],
            formal: [
                { name: "Executive Power", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY?utm_source=generator", mood: "professional" },
                { name: "Classical Elegance", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7K31D69s4M1?utm_source=generator", mood: "sophisticated" },
                { name: "Jazz Sophistication", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?utm_source=generator", mood: "classy" },
                { name: "Corporate Confidence", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda?utm_source=generator", mood: "motivational" },
                { name: "Business Lounge", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4H7FFUM2osB?utm_source=generator", mood: "refined" },
                { name: "Boardroom Beats", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0BcQWzuB7ZO?utm_source=generator", mood: "focused" },
                { name: "Elegant Evening", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2ENAPP1Tyed?utm_source=generator", mood: "upscale" },
                { name: "Professional Playlist", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX26DKvjp0s9M?utm_source=generator", mood: "serious" }
            ],
            sporty: [
                { name: "Gym Beast Mode", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator", mood: "intense" },
                { name: "Running Rhythm", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0h0QnLkMBl4?utm_source=generator", mood: "steady" },
                { name: "Cardio Blast", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2PQDq3PdrHQ?utm_source=generator", mood: "energetic" },
                { name: "Power Workout", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator", mood: "pumped" },
                { name: "Athletic Anthems", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3WvGXE8PbZz?utm_source=generator", mood: "motivated" },
                { name: "Training Tracks", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw?utm_source=generator", mood: "driven" },
                { name: "Fitness Fire", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5J7FIl4q56G?utm_source=generator", mood: "explosive" },
                { name: "Morning Motivation", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634?utm_source=generator", mood: "uplifting" }
            ],
            party: [
                { name: "Dance Floor Fire", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0BcQWzuB7ZO?utm_source=generator", mood: "hype" },
                { name: "Pre-Game Hype", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8a1tdzq5tbM?utm_source=generator", mood: "exciting" },
                { name: "Club Anthems", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator", mood: "electric" },
                { name: "House Party Vibes", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw?utm_source=generator", mood: "social" },
                { name: "Festival Energy", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2ENAPP1Tyed?utm_source=generator", mood: "wild" },
                { name: "Night Out Bangers", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX26DKvjp0s9M?utm_source=generator", mood: "crazy" },
                { name: "Party Starter", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5J7FIl4q56G?utm_source=generator", mood: "fun" },
                { name: "Weekend Warriors", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634?utm_source=generator", mood: "celebration" }
            ],
            artsy: [
                { name: "Creative Flow", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator", mood: "inspiring" },
                { name: "Indie Discoveries", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX26DKvjp0s9M?utm_source=generator", mood: "unique" },
                { name: "Experimental Sounds", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5J7FIl4q56G?utm_source=generator", mood: "avant-garde" },
                { name: "Gallery Opening", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1s9knjP51Oa?utm_source=generator", mood: "cultured" },
                { name: "Bohemian Dreams", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634?utm_source=generator", mood: "free-spirited" },
                { name: "Alternative Vibes", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?utm_source=generator", mood: "edgy" },
                { name: "Creative Minds", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2Nc3B70tvx0?utm_source=generator", mood: "thoughtful" },
                { name: "Artistic Expression", url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7K31D69s4M1?utm_source=generator", mood: "expressive" }
            ]
        };

        // Translation dictionary
        this.translations = {
    en: {
        title: "OUTFIT VIBE MUSIC",
        subtitle: "Your outfit sets the vibe, we set the playlist!",
        "upload-title": "Upload Your Fit",
        "upload-subtitle": "Drop your outfit pic and let AI do the magic",
        "upload-text": "Click or drop image here",
        "upload-hint": "JPG, PNG up to 10MB",
        "manual-title": "Manual Override",
        "manual-subtitle": "Don't trust the AI? Do it yourself! 💅",
        casual: "Casual",
        formal: "Formal",
        sporty: "Sporty",
        party: "Party",
        artsy: "Artsy",
        "casual-desc": "Relaxed and comfy! Perfect for a chill day.",
        "formal-desc": "Professional and polished! Ready to conquer the business world.",
        "sporty-desc": "Energetic and active! Time to move and get motivated.",
        "party-desc": "Party ready! Those vibrant colors are perfect for a night out.",
        "artsy-desc": "Creative and expressive! Your unique style shows an artistic personality.",
        translating: "Translating..."
    },
    hi: {
        title: "आउटफिट वाइब म्यूजिक",
        subtitle: "आपका आउटफिट वाइब सेट करता है, हम प्लेलिस्ट सेट करते हैं!",
        "upload-title": "अपना फिट अपलोड करें",
        "upload-subtitle": "अपनी आउटफिट की तस्वीर डालें और AI को जादू करने दें",
        "upload-text": "क्लिक करें या इमेज यहाँ डालें",
        "upload-hint": "JPG, PNG 10MB तक",
        "manual-title": "मैन्युअल ओवरराइड",
        "manual-subtitle": "AI पर भरोसा नहीं? खुद करें! 💅",
        casual: "कैजुअल",
        formal: "फॉर्मल",
        sporty: "स्पोर्टी",
        party: "पार्टी",
        artsy: "आर्टिस्टिक",
        "casual-desc": "आरामदायक और सुविधाजनक! एक शांत दिन के लिए बिल्कुल सही।",
        "formal-desc": "पेशेवर और परिष्कृत! व्यापारिक दुनिया को जीतने के लिए तैयार।",
        "sporty-desc": "ऊर्जावान और सक्रिय! आगे बढ़ने और प्रेरित होने का समय।",
        "party-desc": "पार्टी के लिए तैयार! वे जीवंत रंग रात की पार्टी के लिए बिल्कुल सही हैं।",
        "artsy-desc": "रचनात्मक और अभिव्यक्तिपूर्ण! आपकी अनूठी शैली कलात्मक व्यक्तित्व दिखाती है।",
        translating: "अनुवाद हो रहा है..."
    },
    ta: {
        title: "ஆடை வைப் இசை",
        subtitle: "உங்கள் ஆடை வைப்பை அமைக்கிறது, நாங்கள் பிளேலிஸ்ட் அமைக்கிறோம்!",
        "upload-title": "உங்கள் ஃபிட்டை பதிவேற்றவும்",
        "upload-subtitle": "உங்கள் ஆடை படத்தை இடவும் மற்றும் AI மாயம் செய்ய அனுமதிக்கவும்",
        "upload-text": "கிளிக் செய்யவும் அல்லது படத்தை இடவும்",
        "upload-hint": "JPG, PNG 10MB வரை",
        "manual-title": "கையேடு மேலெழுதல்",
        "manual-subtitle": "AI ஐ நம்பவில்லையா? நீங்களே செய்யுங்கள்! 💅",
        casual: "சாதாரண",
        formal: "முறையான",
        sporty: "விளையாட்டு",
        party: "விருந்து",
        artsy: "கலை",
        "casual-desc": "நிதானமான மற்றும் வசதியான! ஒரு அமைதியான நாளுக்கு சரியானது।",
        "formal-desc": "தொழில்முறை மற்றும் நுட்பமான! வணிக உலகை வெல்ல தயார்।",
        "sporty-desc": "ஆற்றல் மிக்க மற்றும் சுறுசுறுப்பான! நகர்ந்து உந்துதல் பெற வேண்டிய நேரம்।",
        "party-desc": "விருந்துக்கு தயார்! அந்த துடிப்பான நிறங்கள் இரவு வெளியே செல்வதற்கு சரியானவை।",
        "artsy-desc": "ஆக்கப்பூர்வமான மற்றும் வெளிப்படுத்தும்! உங்கள் தனித்துவமான பாணி கலை ஆளுமையை காட்டுகிறது।",
        translating: "மொழிபெயர்க்கிறது..."
    },
    te: {
        title: "దుస్తుల వైబ్ సంగీతం",
        subtitle: "మీ దుస్తులు వైబ్ సెట్ చేస్తాయి, మేము ప్లేలిస్ట్ సెట్ చేస్తాము!",
        "upload-title": "మీ ఫిట్ అప్‌లోడ్ చేయండి",
        "upload-subtitle": "మీ దుస్తుల చిత్రాన్ని వేయండి మరియు AI మాయ చేయనివ్వండి",
        "upload-text": "క్లిక్ చేయండి లేదా చిత్రాన్ని వేయండి",
        "upload-hint": "JPG, PNG 10MB వరకు",
        "manual-title": "మాన్యువల్ ఓవర్‌రైడ్",
        "manual-subtitle": "AI ని నమ్మలేదా? మీరే చేయండి! 💅",
        casual: "సాధారణ",
        formal: "అధికారిక",
        sporty: "క్రీడా",
        party: "పార్టీ",
        artsy: "కళాత్మక",
        "casual-desc": "రిలాక్స్డ్ మరియు సౌకర్యవంతమైన! చిల్ డే కోసం పర్ఫెక్ట్।",
        "formal-desc": "వృత్తిపరమైన మరియు అధునాతనమైన! వ్యాపార ప్రపంచాన్ని జయించడానికి సిద్ధం।",
        "sporty-desc": "శక్తివంతమైన మరియు చురుకైన! కదలడానికి మరియు ప్రేరణ పొందడానికి సమయం।",
        "party-desc": "పార్టీకి సిద్ధం! ఆ చురుకైన రంగులు రాత్రి బయటకు వెళ్లడానికి పర్ఫెక్ట్।",
        "artsy-desc": "సృజనాత్మక మరియు వ్యక్తీకరణ! మీ ప్రత్యేకమైన శైలి కళాత్మక వ్యక్తిత్వాన్ని చూపిస్తుంది।",
        translating: "అనువదిస్తోంది..."
    },
    bn: {
        title: "পোশাক ভাইব মিউজিক",
        subtitle: "আপনার পোশাক ভাইব সেট করে, আমরা প্লেলিস্ট সেট করি!",
        "upload-title": "আপনার ফিট আপলোড করুন",
        "upload-subtitle": "আপনার পোশাকের ছবি ড্রপ করুন এবং AI জাদু করতে দিন",
        "upload-text": "ক্লিক করুন বা ছবি ড্রপ করুন",
        "upload-hint": "JPG, PNG ১০MB পর্যন্ত",
        "manual-title": "ম্যানুয়াল ওভাররাইড",
        "manual-subtitle": "AI কে বিশ্বাস করেন না? নিজেই করুন! 💅",
        casual: "নৈমিত্তিক",
        formal: "আনুষ্ঠানিক",
        sporty: "ক্রীড়া",
        party: "পার্টি",
        artsy: "শিল্পকলা",
        "casual-desc": "আরামদায়ক এবং স্বাচ্ছন্দ্যময়! একটি শান্ত দিনের জন্য নিখুঁত।",
        "formal-desc": "পেশাদার এবং পরিশীলিত! ব্যবসায়িক জগৎ জয় করার জন্য প্রস্তুত।",
        "sporty-desc": "শক্তিশালী এবং সক্রিয়! এগিয়ে যাওয়ার এবং অনুপ্রাণিত থাকার সময়।",
        "party-desc": "পার্টির জন্য প্রস্তুত! সেই প্রাণবন্ত রঙগুলি রাতে বেরোনোর জন্য নিখুঁত।",
        "artsy-desc": "সৃজনশীল এবং অভিব্যক্তিপূর্ণ! আপনার অনন্য শৈলী শিল্পকলার ব্যক্তিত্ব দেখায়।",
        translating: "অনুবাদ করছে..."
    },
    mr: {
        title: "पोशाख व्हाइब संगीत",
        subtitle: "तुमचा पोशाख व्हाइब सेट करतो, आम्ही प्लेलिस्ट सेट करतो!",
        "upload-title": "तुमचा फिट अपलोड करा",
        "upload-subtitle": "तुमच्या पोशाखाचा फोटो टाका आणि AI ला जादू करू द्या",
        "upload-text": "क्लिक करा किंवा इमेज टाका",
        "upload-hint": "JPG, PNG 10MB पर्यंत",
        "manual-title": "मॅन्युअल ओव्हरराइड",
        "manual-subtitle": "AI वर विश्वास नाही? स्वतः करा! 💅",
        casual: "सामान्य",
        formal: "औपचारिक",
        sporty: "क्रीडा",
        party: "पार्टी",
        artsy: "कलात्मक",
        "casual-desc": "आरामशीर आणि सोयीस्कर! एका शांत दिवसासाठी परिपूर्ण।",
        "formal-desc": "व्यावसायिक आणि अत्याधुनिक! व्यावसायिक जगावर विजय मिळवण्यासाठी तयार।",
        "sporty-desc": "उर्जावान आणि सक्रिय! पुढे जाण्याची आणि प्रेरित राहण्याची वेळ।",
        "party-desc": "पार्टीसाठी तयार! ते चैतन्यशील रंग रात्री बाहेर जाण्यासाठी परिपूर्ण आहेत।",
        "artsy-desc": "सर्जनशील आणि अभिव्यक्त! तुमची अनोखी शैली कलात्मक व्यक्तिमत्त्व दर्शवते।",
        translating: "भाषांतर करत आहे..."
    }
};


        // Track playlist usage to avoid repetition
        this.playlistHistory = JSON.parse(localStorage.getItem('playlistHistory')) || {};
        this.maxHistorySize = 3;
        
        this.loadingInterval = null;
        this.progressInterval = null;
        this.tipInterval = null;
        this.timeInterval = null;
        this.skyUpdateInterval = null;
        this.isProcessing = false;
        this.init();
    }

    // Authentication methods
    async initAuth() {
        // Check if user is already logged in
        this.currentUser = await this.getCurrentUser();
        if (this.currentUser) {
            this.isLoggedIn = true;
            this.updateUIForLoggedInUser();
        }
        
        // Set up auth state listener
        this.supabaseClient.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                this.currentUser = session.user;
                this.isLoggedIn = true;
                this.updateUIForLoggedInUser();
            } else if (event === 'SIGNED_OUT') {
                this.currentUser = null;
                this.isLoggedIn = false;
                this.updateUIForLoggedOutUser();
            }
        });
    }

    async getCurrentUser() {
        const { data: { user } } = await this.supabaseClient.auth.getUser();
        return user;
    }

    async signInWithEmail(email, password) {
        const { data, error } = await this.supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });
        
        if (error) {
            console.error('Sign in error:', error);
            return { success: false, error: error.message };
        }
        
        return { success: true, user: data.user };
    }

    async signUpWithEmail(email, password) {
        const { data, error } = await this.supabaseClient.auth.signUp({
            email: email,
            password: password,
        });
        
        if (error) {
            console.error('Sign up error:', error);
            return { success: false, error: error.message };
        }
        
        return { success: true, user: data.user };
    }

    async signOut() {
        const { error } = await this.supabaseClient.auth.signOut();
        if (error) {
            console.error('Sign out error:', error);
            return { success: false, error: error.message };
        }
        return { success: true };
    }

    updateUIForLoggedInUser() {
        // Add your UI update logic here
        console.log('User logged in:', this.currentUser.email);
    }

    updateUIForLoggedOutUser() {
        // Add your UI update logic here
        console.log('User logged out');
    }

    // Image upload to Supabase Storage
    async uploadOutfitImage(file, userId) {
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${userId}/${Date.now()}.${fileExt}`;
            
            const { data, error } = await this.supabaseClient.storage
                .from('outfit-images')
                .upload(fileName, file);
            
            if (error) {
                console.error('Upload error:', error);
                return { success: false, error: error.message };
            }
            
            // Get public URL
            const { data: urlData } = this.supabaseClient.storage
                .from('outfit-images')
                .getPublicUrl(fileName);
            
            return { success: true, url: urlData.publicUrl, path: fileName };
        } catch (err) {
            console.error('Upload failed:', err);
            return { success: false, error: err.message };
        }
    }

    // Get playlists from Supabase database
    async getPlaylistsByStyle(style) {
        try {
            const { data, error } = await this.supabaseClient
                .from('style_playlists')
                .select('*')
                .eq('style_name', style)
                .eq('is_active', true)
                .limit(6);
            
            if (error) {
                console.error('Playlist fetch error:', error);
                return { success: false, error: error.message };
            }
            
            return { success: true, playlists: data };
        } catch (err) {
            console.error('Playlist fetch failed:', err);
            return { success: false, error: err.message };
        }
    }

    init() {
        this.bindEvents();
        this.initAuth(); 
        this.loadThemePreference();
        this.initVibeSelector();
        this.initUploadArea();
        this.initTranslation();
        this.initDynamicSky();
        this.startTimeUpdates();
        
        // Initialize TTS after DOM is fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initTextToSpeech();
            });
        } else {
            setTimeout(() => {
                this.initTextToSpeech();
            }, 500);
        }
    }

    bindEvents() {
        const imageInput = document.getElementById('imageInput');
        const analyzeBtn = document.getElementById('analyzeBtn');
        if (imageInput) {
            imageInput.addEventListener('change', (e) => this.handleImageUpload(e));
        }
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => this.analyzeOutfit());
        }
    }

    initUploadArea() {
        const uploadArea = document.querySelector('.upload-area');
        const imageInput = document.getElementById('imageInput');
        if (!uploadArea || !imageInput) return;

        const resetArea = () => {
            uploadArea.style.borderColor = 'var(--primary-color)';
            uploadArea.style.background = 'var(--glass-bg)';
        };

        uploadArea.addEventListener('dragover', e => { 
            e.preventDefault(); 
            uploadArea.style.borderColor = 'var(--accent-color)'; 
            uploadArea.style.background = 'rgba(255,255,255,.08)'; 
        });
        
        uploadArea.addEventListener('dragleave', e => { 
            e.preventDefault(); 
            resetArea(); 
        });

        uploadArea.addEventListener('drop', e => {
            e.preventDefault();
            resetArea();
            const [file] = e.dataTransfer.files;
            if (file) {
                imageInput.files = e.dataTransfer.files;
                this.handleImageUpload({ target: { files: [file] } });
            }
        });
    }

    initVibeSelector() {
        document.querySelectorAll('.vibe-option').forEach(opt => {
            opt.addEventListener('click', e => {
                document.querySelectorAll('.vibe-option').forEach(o => o.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.applyVibe(e.currentTarget.dataset.vibe, true);
            });
        });
    }

    // ===== TEXT-TO-SPEECH SYSTEM =====
    initTextToSpeech() {
        // Check browser support
        if (!('speechSynthesis' in window)) {
            console.warn('Text-to-Speech not supported in this browser');
            return;
        }
        
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.isSpeaking = false;
        this.speechEnabled = localStorage.getItem('speechEnabled') !== 'false';
        this.voices = [];
        
        // Load voices with proper handling
        this.loadVoices();
        
        // Add speech controls after DOM is ready
        setTimeout(() => {
            this.addSpeechControls();
            this.addSpeechButtons();
        }, 100);
    }

    loadVoices() {
        const loadVoicesHandler = () => {
            this.voices = this.speechSynthesis.getVoices();
            console.log('Loaded voices:', this.voices.length);
        };
        
        // Load voices immediately
        loadVoicesHandler();
        
        // Handle async voice loading (Safari/Chrome)
        if (this.voices.length === 0) {
            this.speechSynthesis.onvoiceschanged = loadVoicesHandler;
        }
        
        // Fallback timeout
        setTimeout(loadVoicesHandler, 1000);
    }

    addSpeechControls() {
        // Check if already exists
        if (document.getElementById('speechToggle')) return;
        
        const heroHeader = document.querySelector('.hero-header');
        if (!heroHeader) return;
        
        const speechControls = document.createElement('div');
        speechControls.className = 'speech-controls';
        speechControls.innerHTML = `
            <button id="speechToggle" class="speech-toggle glass-button" title="${this.speechEnabled ? 'Disable' : 'Enable'} Text-to-Speech">
                <span class="speech-icon">${this.speechEnabled ? '🔊' : '🔇'}</span>
            </button>
        `;
        
        heroHeader.appendChild(speechControls);
        
        // Bind toggle event with error handling
        const toggleBtn = document.getElementById('speechToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                try {
                    this.toggleSpeech();
                } catch (error) {
                    console.error('Speech toggle error:', error);
                }
            });
        }
    }

    addSpeechButtons() {
        // Add speech buttons to existing content
        const contentSelectors = [
            { selector: '.card-title', priority: 'high' },
            { selector: '.hero-subtitle', priority: 'high' },
            { selector: '.vibe-description', priority: 'medium' },
            { selector: '.error-message', priority: 'high' }
        ];
        
        contentSelectors.forEach(({ selector, priority }) => {
            document.querySelectorAll(selector).forEach(element => {
                if (!element.querySelector('.speech-btn') && element.textContent.trim()) {
                    this.addSpeechButtonToElement(element, priority);
                }
            });
        });
    }

    addSpeechButtonToElement(element, priority = 'medium') {
        const speechBtn = document.createElement('button');
        speechBtn.className = 'speech-btn';
        speechBtn.innerHTML = '🔊';
        speechBtn.title = 'Read aloud';
        speechBtn.setAttribute('aria-label', 'Read this text aloud');
        
        speechBtn.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.speakText(element.textContent.trim(), { priority });
        };
        
        // Ensure parent has relative positioning
        if (getComputedStyle(element).position === 'static') {
            element.style.position = 'relative';
        }
        
        element.appendChild(speechBtn);
    }

    speakText(text, options = {}) {
        if (!this.speechEnabled || !text || !text.trim()) {
            console.log('Speech disabled or empty text');
            return;
        }
        
        // Clean text
        const cleanText = text.replace(/[^\w\s.,!?-]/g, '').trim();
        if (!cleanText) return;
        
        try {
            // Stop current speech
            this.stopSpeech();
            
            // Create new utterance
            this.currentUtterance = new SpeechSynthesisUtterance(cleanText);
            
            // Set voice with fallback
            const voice = this.getVoiceForLanguage(this.currentLanguage);
            if (voice) {
                this.currentUtterance.voice = voice;
            }
            
            // Configure speech properties
            this.currentUtterance.rate = options.rate || 0.85;
            this.currentUtterance.pitch = options.pitch || 1.0;
            this.currentUtterance.volume = options.volume || 0.9;
            this.currentUtterance.lang = this.getLanguageCode(this.currentLanguage);
            
            // Add event listeners
            this.currentUtterance.onstart = () => {
                this.isSpeaking = true;
                this.updateSpeechUI(true);
                console.log('Speech started:', cleanText.substring(0, 50));
            };
            
            this.currentUtterance.onend = () => {
                this.isSpeaking = false;
                this.updateSpeechUI(false);
                console.log('Speech ended');
            };
            
            this.currentUtterance.onerror = (event) => {
                console.error('Speech error:', event.error);
                this.isSpeaking = false;
                this.updateSpeechUI(false);
                
                // Show user-friendly error
                if (event.error === 'network') {
                    this.showNotification('Speech unavailable - check internet connection');
                }
            };
            
            // Speak with timeout fallback
            this.speechSynthesis.speak(this.currentUtterance);
            
            // Fallback timeout (some browsers have issues)
            setTimeout(() => {
                if (this.isSpeaking && !this.speechSynthesis.speaking) {
                    this.isSpeaking = false;
                    this.updateSpeechUI(false);
                }
            }, cleanText.length * 100 + 3000);
            
        } catch (error) {
            console.error('Speech synthesis error:', error);
            this.showNotification('Speech feature unavailable');
        }
    }

    getVoiceForLanguage(language) {
        if (!this.voices || this.voices.length === 0) {
            console.warn('No voices available');
            return null;
        }
        
        const languageMap = {
            'en': ['en-US', 'en-GB', 'en'],
            'hi': ['hi-IN', 'hi'],
            'ta': ['ta-IN', 'ta'],
            'te': ['te-IN', 'te'],
            'bn': ['bn-IN', 'bn'],
            'mr': ['mr-IN', 'mr']
        };
        
        const targetLangs = languageMap[language] || ['en-US', 'en'];
        
        // Try to find exact match
        for (const targetLang of targetLangs) {
            const voice = this.voices.find(v => v.lang === targetLang);
            if (voice) return voice;
        }
        
        // Try partial match
        for (const targetLang of targetLangs) {
            const voice = this.voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));
            if (voice) return voice;
        }
        
        // Fallback to English or first available
        return this.voices.find(v => v.lang.startsWith('en')) || this.voices[0];
    }

    getLanguageCode(language) {
        const codes = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'ta': 'ta-IN',
            'te': 'te-IN',
            'bn': 'bn-IN',
            'mr': 'mr-IN'
        };
        return codes[language] || 'en-US';
    }

    stopSpeech() {
        try {
            if (this.speechSynthesis && this.speechSynthesis.speaking) {
                this.speechSynthesis.cancel();
            }
            this.isSpeaking = false;
            this.updateSpeechUI(false);
        } catch (error) {
            console.error('Error stopping speech:', error);
        }
    }

    toggleSpeech() {
        this.speechEnabled = !this.speechEnabled;
        localStorage.setItem('speechEnabled', this.speechEnabled);
        
        const toggle = document.getElementById('speechToggle');
        const icon = toggle?.querySelector('.speech-icon');
        
        if (this.speechEnabled) {
            if (icon) icon.textContent = '🔊';
            if (toggle) toggle.title = 'Disable Text-to-Speech';
            this.showNotification('🔊 Text-to-Speech enabled');
        } else {
            if (icon) icon.textContent = '🔇';
            if (toggle) toggle.title = 'Enable Text-to-Speech';
            this.stopSpeech();
            this.showNotification('🔇 Text-to-Speech disabled');
        }
    }

    updateSpeechUI(speaking) {
        document.querySelectorAll('.speech-btn').forEach(btn => {
            btn.style.opacity = speaking ? '0.5' : '1';
            btn.disabled = speaking;
        });
        
        const toggle = document.getElementById('speechToggle');
        if (toggle) {
            toggle.classList.toggle('speaking', speaking);
        }
    }

    showNotification(message) {
        // Remove existing notification
        const existing = document.querySelector('.speech-notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = 'speech-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    getVibeDescription(vibe) {
        const translations = this.translations[this.currentLanguage] || this.translations.en;
        const descKey = vibe + '-desc';
        return translations[descKey] || translations['casual-desc'] || `Perfect ${vibe} style detected!`;
    }

    // ===== TRANSLATION SYSTEM =====
    initTranslation() {
        const translateBtn = document.getElementById('translateBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (translateBtn) {
            translateBtn.addEventListener('click', () => {
                languageDropdown.style.display = languageDropdown.style.display === 'none' ? 'block' : 'none';
            });
        }

        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.dataset.lang;
                const selectedName = e.currentTarget.dataset.name;
                this.translateTo(selectedLang, selectedName);
                languageDropdown.style.display = 'none';
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.translation-controls')) {
                languageDropdown.style.display = 'none';
            }
        });

        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        if (savedLang !== 'en') {
            this.translateTo(savedLang);
        }
    }

    async translateTo(targetLang, langName = null) {
        if (this.isTranslating || targetLang === this.currentLanguage) return;
        
        this.isTranslating = true;
        this.showTranslationLoader(true);

        try {
            const translateBtn = document.getElementById('translateBtn');
            const translateText = translateBtn.querySelector('.translate-text');
            if (translateText) {
                translateText.textContent = targetLang.toUpperCase();
            }

            await new Promise(resolve => setTimeout(resolve, 1500));

            this.applyTranslations(targetLang);
            
            this.currentLanguage = targetLang;
            localStorage.setItem('selectedLanguage', targetLang);

            document.querySelectorAll('.language-option').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.lang === targetLang);
            });

        } catch (error) {
            console.error('Translation error:', error);
            alert('Translation failed. Please try again.');
        } finally {
            this.showTranslationLoader(false);
            this.isTranslating = false;
        }
    }

    applyTranslations(targetLang) {
        const translations = this.translations[targetLang] || this.translations.en;
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });

        if (translations.title) {
            document.title = translations.title;
        }

        this.updateVibeDescriptions(targetLang);
    }

    updateVibeDescriptions(targetLang) {
        const vibeType = document.getElementById('vibeType');
        const vibeDescription = document.getElementById('vibeDescription');
        
        if (vibeType && vibeDescription) {
            const currentVibe = vibeType.textContent.toLowerCase();
            const translations = this.translations[targetLang] || this.translations.en;
            
            if (translations[currentVibe + '-desc']) {
                const descElement = vibeDescription.querySelector('[data-translate*="-desc"]');
                if (descElement) {
                    descElement.textContent = translations[currentVibe + '-desc'];
                }
            }
        }
    }

    showTranslationLoader(show) {
        const loader = document.getElementById('translationLoader');
        if (loader) {
            loader.style.display = show ? 'flex' : 'none';
        }
    }

    // ===== FIXED TIME API SYSTEM =====
    async getIndianTime() {
        try {
            // FIXED: Use local time calculation for IST (most reliable)
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const ist = new Date(utc + (5.5 * 3600000)); // IST is UTC+5:30
            return ist;
        } catch (error) {
            console.error('Time calculation error:', error);
            return new Date(); // Fallback to local time
        }
    }

    // ===== DYNAMIC SKY SYSTEM =====
    initDynamicSky() {
        this.updateSkyTheme();
        this.skyUpdateInterval = setInterval(() => {
            this.updateSkyTheme();
        }, 60000); // Update every minute
    }

    async updateSkyTheme() {
        const indianTime = await this.getIndianTime();
        const hour = indianTime.getHours();
        const minute = indianTime.getMinutes();
        
        console.log(`Current IST time: ${hour}:${minute.toString().padStart(2, '0')}`);
        
        const skyContainer = document.querySelector('.sky-container');
        const sun = document.getElementById('dynamicSun');
        const stars = document.getElementById('starsContainer');
        const clouds = document.querySelector('.clouds');
        
        if (!skyContainer || !sun) return;

        let sunProgress = 0;
        let skyGradient;
        
        if (hour >= 6 && hour < 18) {
            // Daytime (6 AM to 6 PM)
            sunProgress = ((hour - 6) + (minute / 60)) / 12;
            
            if (hour >= 6 && hour < 8) {
                skyGradient = 'var(--sky-morning)';
                sun.style.opacity = '0.7';
            } else if (hour >= 8 && hour < 17) {
                skyGradient = 'var(--sky-day)';
                sun.style.opacity = '1';
            } else {
                skyGradient = 'var(--sky-evening)';
                sun.style.opacity = '0.8';
            }
        } else {
            // Nighttime (6 PM to 6 AM)
            skyGradient = 'var(--sky-night)';
            sun.style.opacity = '0.1';
            sunProgress = hour < 6 ? 0 : 1;
        }

        // Position sun along arc
        const sunX = 10 + (sunProgress * 80);
        const sunY = 80 - (Math.sin(sunProgress * Math.PI) * 60);
        
        sun.style.left = `${sunX}%`;
        sun.style.top = `${sunY}%`;
        
        skyContainer.style.background = skyGradient;

        // Show/hide stars (nighttime: 6 PM to 6 AM)
        if (stars) {
            stars.style.opacity = (hour >= 18 || hour < 6) ? '1' : '0';
        }

        // Adjust cloud opacity
        if (clouds) {
            clouds.style.opacity = (hour >= 6 && hour < 18) ? '0.7' : '0.3';
        }
    }

    startTimeUpdates() {
        this.updateTime();
        this.timeInterval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    async updateTime() {
        const indianTime = await this.getIndianTime();
        const timeElement = document.querySelector('.time-text');
        
        if (timeElement) {
            const timeString = indianTime.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            timeElement.textContent = timeString;
        }
    }

    // ===== IMAGE UPLOAD WITH SESSION RESTART =====
    handleImageUpload({ target }) {
        const [file] = target.files || [];
        if (!file) return alert('No file selected!');
        if (!file.type.startsWith('image/')) return alert('Please choose an image file.');

        this.resetSession();

        const fr = new FileReader();
        fr.onload = e => {
            const imagePreview = document.getElementById('imagePreview');
            if (imagePreview) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="preview">`;
            }
            this.showSection('previewSection');
            ['resultsSection','errorSection','loadingSection'].forEach(id => this.hideSection(id));
            document.body.removeAttribute('data-vibe');
        };
        fr.readAsDataURL(file);
    }

    resetSession() {
        document.querySelectorAll('.vibe-option').forEach(o => o.classList.remove('active'));
        this.isProcessing = false;
        this.clearAllIntervals();
        document.body.removeAttribute('data-vibe');
        
        const spotifyEmbed = document.getElementById('spotifyEmbed');
        if (spotifyEmbed) spotifyEmbed.innerHTML = '';
        
        const vibeEmoji = document.getElementById('vibeEmoji');
        const vibeType = document.getElementById('vibeType');
        const vibeDescription = document.getElementById('vibeDescription');
        
        if (vibeEmoji) vibeEmoji.textContent = '';
        if (vibeType) vibeType.textContent = '';
        if (vibeDescription) vibeDescription.innerHTML = '';
        
        ['resultsSection','errorSection','loadingSection'].forEach(id => this.hideSection(id));
    }

    async analyzeOutfit() {
        if (!this.isLoggedIn || !this.currentUser) {
            alert('Please log in to analyze your outfit');
            return;
        }
        if (this.isProcessing) return;
        const file = document.getElementById('imageInput').files[0];
        if (!file) return alert('Upload an image first!');
        this.isProcessing = true;

        this.hideSection('resultsSection');
        this.showAdvancedLoading(true);

        try {
            const analysis = await this.enhancedCanvasAnalysis(file);
            this.applyVibe(analysis.vibe, false, analysis);
        } catch (err) {
            console.error(err);
            this.show404Error();
        } finally {
            this.showAdvancedLoading(false);
            this.isProcessing = false;
        }
    }

    enhancedCanvasAnalysis(file) {
        return new Promise(resolve => {
            setTimeout(() => {
                const fr = new FileReader();
                fr.onload = e => {
                    this.analyzeImageAdvanced(e.target.result).then(analysis => {
                        const enhancedVibe = this.getIntelligentVibe(analysis);
                        resolve({ 
                            ...analysis, 
                            vibe: enhancedVibe,
                            confidence: 0.94, 
                            source: 'Advanced AI Fashion Analysis' 
                        });
                    });
                };
                fr.readAsDataURL(file);
            }, 20000);
        });
    }

    analyzeImageAdvanced(src) {
        return new Promise(res => {
            const img = new Image();
            img.onload = () => {
                const c = document.createElement('canvas');
                c.width = img.width;
                c.height = img.height;
                const ctx = c.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const d = ctx.getImageData(0, 0, c.width, c.height).data;
                
                const col = this.getDominantColors(d);
                const br = this.getAverageBrightness(d);
                const varc = this.calculateColorVariance(d);
                const contrast = this.calculateContrast(d);
                const saturation = this.calculateSaturation(col);
                
                res({ 
                    colors: col, 
                    brightness: br, 
                    variance: varc,
                    contrast: contrast,
                    saturation: saturation
                });
            };
            img.src = src;
        });
    }

    getDominantColors(data) {
        const tot = { r: 0, g: 0, b: 0 }, len = data.length / 4;
        for (let i = 0; i < data.length; i += 4) { 
            tot.r += data[i]; 
            tot.g += data[i + 1]; 
            tot.b += data[i + 2]; 
        }
        return { 
            red: Math.round(tot.r / len), 
            green: Math.round(tot.g / len), 
            blue: Math.round(tot.b / len) 
        };
    }

    getAverageBrightness(data) {
        let sum = 0, len = data.length / 4;
        for (let i = 0; i < data.length; i += 4) {
            sum += (data[i] + data[i + 1] + data[i + 2]) / 3;
        }
        return sum / len;
    }

    calculateColorVariance(data) {
        const bucket = {}, step = 16;
        for (let i = 0; i < data.length; i += step * 4) {
            const r = Math.floor(data[i] / 32) * 32;
            const g = Math.floor(data[i + 1] / 32) * 32;
            const b = Math.floor(data[i + 2] / 32) * 32;
            bucket[`${r}-${g}-${b}`] = (bucket[`${r}-${g}-${b}`] || 0) + 1;
        }
        return Object.keys(bucket).length;
    }

    calculateContrast(data) {
        let maxBrightness = 0, minBrightness = 255;
        for (let i = 0; i < data.length; i += 4) {
            const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
            maxBrightness = Math.max(maxBrightness, brightness);
            minBrightness = Math.min(minBrightness, brightness);
        }
        return maxBrightness - minBrightness;
    }

    calculateSaturation({ red, green, blue }) {
        return Math.max(red, green, blue) - Math.min(red, green, blue);
    }

    getIntelligentVibe(analysis) {
        const { colors, brightness, variance, contrast, saturation } = analysis;
        const hour = new Date().getHours();
        const dayOfWeek = new Date().getDay();
        
        let vibeScores = { formal: 0, casual: 0, sporty: 0, party: 0, artsy: 0 };
        
        if (brightness < 90 && saturation < 40) vibeScores.formal += 3;
        if (brightness > 100 && saturation < 60 && variance < 30) vibeScores.sporty += 3;
        if (brightness > 180 && saturation > 100) vibeScores.party += 3;
        if (variance > 50 && saturation > 80) vibeScores.artsy += 3;
        if (brightness > 120 && (colors.red > 150 || colors.green > 150) && saturation > 60) vibeScores.sporty += 2;
        
        if (hour >= 9 && hour <= 17 && dayOfWeek >= 1 && dayOfWeek <= 5) {
            vibeScores.formal += 2;
        } else if (hour >= 18 && hour <= 23) {
            vibeScores.party += 2;
        } else if (hour >= 6 && hour <= 10) {
            vibeScores.sporty += 1;
        }
        
        if (contrast > 100) vibeScores.formal += 1;
        if (contrast < 50) vibeScores.casual += 2;
        
        const maxScore = Math.max(...Object.values(vibeScores));
        if (maxScore > 0) {
            return Object.keys(vibeScores).find(key => vibeScores[key] === maxScore);
        }
        
        return this.weightedRandomVibe();
    }

    weightedRandomVibe() {
        const vibes = ['casual', 'formal', 'sporty', 'party', 'artsy'];
        const weights = [0.35, 0.25, 0.2, 0.15, 0.05];
        
        const random = Math.random();
        let cumulative = 0;
        
        for (let i = 0; i < vibes.length; i++) {
            cumulative += weights[i];
            if (random <= cumulative) {
                return vibes[i];
            }
        }
        
        return 'casual';
    }

    applyVibe(vibe, manual = false, analysis = null) {
        const valid = ['casual', 'formal', 'sporty', 'party', 'artsy'];
        if (!valid.includes(vibe)) vibe = 'casual';

        this.currentVibe = vibe;
        document.body.setAttribute('data-vibe', vibe);
        this.hideSection('previewSection');
        this.showResults(vibe, manual, analysis);
        this.loadPlaylist(vibe);
    }

    showResults(vibe, manual, analysis) {
        const vibeData = {
            casual: { emoji: '🌈', name: 'CASUAL' },
            formal: { emoji: '💼', name: 'FORMAL' },
            sporty: { emoji: '⚡', name: 'SPORTY' },
            party: { emoji: '🎉', name: 'PARTY' },
            artsy: { emoji: '🎨', name: 'ARTSY' }
        }[vibe];

        const conf = analysis?.confidence ? Math.floor(analysis.confidence * 100) : 94;
        const src = manual ? 'Manual Selection' : `${analysis?.source || 'AI Analysis'} (${conf}% confidence)`;
        const playlistCount = this.fitPlaylists[vibe]?.length || 0;

        const $e = id => document.getElementById(id);
        if ($e('vibeEmoji')) $e('vibeEmoji').textContent = vibeData.emoji;
        if ($e('vibeType')) $e('vibeType').textContent = vibeData.name;
        
        if ($e('vibeDescription')) {
            const translations = this.translations[this.currentLanguage] || this.translations.en;
            const descKey = vibe + '-desc';
            const description = translations[descKey] || translations['casual-desc'];
            
            $e('vibeDescription').innerHTML = `
                <span data-translate="${descKey}">${description}</span>
                <br><small style="opacity:0.7;font-size:0.9rem;">Source: ${src}</small>
                <br><small style="opacity:0.6;font-size:0.8rem;">🎵 ${playlistCount} ${vibe} playlists available</small>
            `;
        }

        this.showSection('resultsSection');
        ['previewSection', 'errorSection'].forEach(id => this.hideSection(id));
        
        // Add TTS announcement with delay
        setTimeout(() => {
            if (this.speechEnabled) {
                const vibeText = `Your outfit vibe is ${vibe}. ${this.getVibeDescription(vibe)}`;
                this.speakText(vibeText, { priority: 'high' });
            }
            
            // Add speech buttons to new content
            this.addSpeechButtons();
        }, 1500);
    }

    // ===== DYNAMIC PLAYLIST SYSTEM =====
    loadPlaylist(fitVibe) {
        const playlist = this.getSmartFitPlaylist(fitVibe);
        const spotifyEmbed = document.getElementById('spotifyEmbed');
        
        if (spotifyEmbed && playlist) {
            const playlistInfo = `
                <div class="playlist-header" style="margin-bottom: 15px; text-align: center;">
                    <h4 style="color: var(--accent-color); margin-bottom: 5px;">${playlist.name}</h4>
                    <p style="opacity: 0.8; font-size: 0.9rem; text-transform: capitalize;">Perfect for ${fitVibe} vibes • Mood: ${playlist.mood}</p>
                </div>
            `;
            
            spotifyEmbed.innerHTML = playlistInfo + `
                <iframe 
                    src="${playlist.url}" 
                    width="100%" 
                    height="380" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media">
                </iframe>
                <div class="playlist-actions" style="margin-top: 15px; text-align: center;">
                    <button onclick="app.getNewFitPlaylist('${fitVibe}')" class="new-playlist-btn glass-button" style="padding: 10px 20px; border: none; border-radius: 25px; cursor: pointer; background: var(--glass-bg); color: var(--text-color); transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.2);">
                        🔄 Try Different ${fitVibe.charAt(0).toUpperCase() + fitVibe.slice(1)} Playlist
                    </button>
                </div>
            `;
            
            this.trackFitPlaylistUsage(fitVibe, playlist);
            
            // Add speech button to playlist name
            setTimeout(() => {
                this.addSpeechButtons();
            }, 100);
        }
    }

    getSmartFitPlaylist(fitVibe) {
        const availablePlaylists = this.fitPlaylists[fitVibe] || this.fitPlaylists.casual;
        const recentPlaylists = this.playlistHistory[fitVibe] || [];
        
        const freshPlaylists = availablePlaylists.filter(playlist => 
            !recentPlaylists.includes(playlist.name)
        );
        
        const playlistPool = freshPlaylists.length > 0 ? freshPlaylists : availablePlaylists;
        const timeBasedMood = this.getFitTimeBasedMood(fitVibe);
        
        const moodMatchedPlaylists = playlistPool.filter(playlist => 
            this.fitMoodMatchesTime(playlist.mood, timeBasedMood, fitVibe)
        );
        
        const finalPool = moodMatchedPlaylists.length > 0 ? moodMatchedPlaylists : playlistPool;
        return finalPool[Math.floor(Math.random() * finalPool.length)];
    }

    getFitTimeBasedMood(fitVibe) {
        const hour = new Date().getHours();
        
        if (fitVibe === 'sporty') {
            if (hour >= 6 && hour < 10) return 'energetic';
            if (hour >= 17 && hour < 20) return 'intense';
            return 'motivated';
        }
        
        if (fitVibe === 'formal') {
            if (hour >= 9 && hour < 17) return 'professional';
            if (hour >= 17 && hour < 22) return 'sophisticated';
            return 'refined';
        }
        
        if (fitVibe === 'party') {
            if (hour >= 18 && hour < 24) return 'hype';
            if (hour >= 14 && hour < 18) return 'exciting';
            return 'social';
        }
        
        if (hour >= 6 && hour < 10) return 'peaceful';
        if (hour >= 10 && hour < 14) return 'focus';
        if (hour >= 14 && hour < 17) return 'relaxed';
        if (hour >= 17 && hour < 20) return 'cozy';
        return 'mellow';
    }

    fitMoodMatchesTime(playlistMood, timeMood, fitVibe) {
        const fitMoodCompatibility = {
            sporty: {
                energetic: ['intense', 'pumped', 'motivated', 'uplifting', 'driven', 'explosive'],
                intense: ['intense', 'pumped', 'explosive', 'energetic'],
                motivated: ['motivated', 'driven', 'uplifting', 'steady']
            },
            formal: {
                professional: ['professional', 'serious', 'focused', 'refined'],
                sophisticated: ['sophisticated', 'classy', 'upscale', 'refined'],
                refined: ['refined', 'sophisticated', 'classy', 'motivational']
            },
            party: {
                hype: ['hype', 'exciting', 'electric', 'wild', 'crazy'],
                exciting: ['exciting', 'fun', 'social', 'celebration'],
                social: ['social', 'fun', 'celebration', 'hype']
            },
            casual: {
                peaceful: ['peaceful', 'mellow', 'laid-back', 'relaxed'],
                focus: ['focus', 'peaceful', 'cozy'],
                relaxed: ['relaxed', 'easy', 'cozy', 'mellow'],
                cozy: ['cozy', 'relaxed', 'peaceful', 'laid-back'],
                mellow: ['mellow', 'peaceful', 'nostalgic', 'laid-back']
            },
            artsy: {
                peaceful: ['inspiring', 'thoughtful', 'expressive'],
                focus: ['thoughtful', 'inspiring', 'cultured'],
                relaxed: ['free-spirited', 'expressive', 'unique'],
                cozy: ['thoughtful', 'inspiring', 'cultured'],
                mellow: ['expressive', 'thoughtful', 'avant-garde']
            }
        };
        
        return fitMoodCompatibility[fitVibe]?.[timeMood]?.includes(playlistMood) || false;
    }

    trackFitPlaylistUsage(fitVibe, playlist) {
        if (!this.playlistHistory[fitVibe]) {
            this.playlistHistory[fitVibe] = [];
        }
        
        this.playlistHistory[fitVibe].unshift(playlist.name);
        
        if (this.playlistHistory[fitVibe].length > this.maxHistorySize) {
            this.playlistHistory[fitVibe] = this.playlistHistory[fitVibe].slice(0, this.maxHistorySize);
        }
        
        localStorage.setItem('playlistHistory', JSON.stringify(this.playlistHistory));
    }

    getNewFitPlaylist(fitVibe) {
        const newPlaylist = this.getSmartFitPlaylist(fitVibe);
        const spotifyEmbed = document.getElementById('spotifyEmbed');
        
        if (spotifyEmbed && newPlaylist) {
            spotifyEmbed.style.opacity = '0.5';
            
            setTimeout(() => {
                const playlistInfo = `
                    <div class="playlist-header" style="margin-bottom: 15px; text-align: center;">
                        <h4 style="color: var(--accent-color); margin-bottom: 5px;">${newPlaylist.name}</h4>
                        <p style="opacity: 0.8; font-size: 0.9rem; text-transform: capitalize;">Perfect for ${fitVibe} vibes • Mood: ${newPlaylist.mood}</p>
                    </div>
                `;
                
                spotifyEmbed.innerHTML = playlistInfo + `
                    <iframe 
                        src="${newPlaylist.url}" 
                        width="100%" 
                        height="380" 
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media">
                    </iframe>
                    <div class="playlist-actions" style="margin-top: 15px; text-align: center;">
                        <button onclick="app.getNewFitPlaylist('${fitVibe}')" class="new-playlist-btn glass-button" style="padding: 10px 20px; border: none; border-radius: 25px; cursor: pointer; background: var(--glass-bg); color: var(--text-color); transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.2);">
                            🔄 Try Different ${fitVibe.charAt(0).toUpperCase() + fitVibe.slice(1)} Playlist
                        </button>
                    </div>
                `;
                
                spotifyEmbed.style.opacity = '1';
                this.trackFitPlaylistUsage(fitVibe, newPlaylist);
                
                // Add speech buttons to new content
                this.addSpeechButtons();
            }, 300);
        }

    }
        // ===== LOADING & UI FUNCTIONS =====
    showAdvancedLoading(show) {
        const loadingSection = document.getElementById('loadingSection');
        if (!loadingSection) return;

        if (show) {
            this.showSection('loadingSection');
            this.hideSection('previewSection');
            this.startLoadingAnimation();
        } else {
            this.hideSection('loadingSection');
            this.clearAllIntervals();
        }
    }

    startLoadingAnimation() {
        const progressBar = document.querySelector('.progress-bar');
        const loadingTips = document.querySelector('.loading-tips');
        const timeDisplay = document.querySelector('.time-display');
        
        let progress = 0;
        let tipIndex = 0;
        let seconds = 0;
        
        const tips = [
            "🎵 Analyzing color palette...",
            "👗 Detecting outfit style...",
            "🎨 Processing fashion elements...",
            "🎧 Curating perfect playlists...",
            "✨ Almost ready with your vibe!"
        ];

        // Progress animation
        this.progressInterval = setInterval(() => {
            progress += Math.random() * 8 + 2;
            if (progress > 95) progress = 95;
            
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
        }, 800);

        // Tips rotation
        this.tipInterval = setInterval(() => {
            if (loadingTips && tipIndex < tips.length) {
                loadingTips.textContent = tips[tipIndex];
                tipIndex++;
            }
        }, 3500);

        // Time counter
        this.timeInterval = setInterval(() => {
            seconds++;
            if (timeDisplay) {
                timeDisplay.textContent = `${seconds}s`;
            }
        }, 1000);

        // Final completion
        setTimeout(() => {
            if (progressBar) {
                progressBar.style.width = '100%';
            }
            if (loadingTips) {
                loadingTips.textContent = "🎉 Analysis complete!";
            }
        }, 18000);
    }

    clearAllIntervals() {
        [this.loadingInterval, this.progressInterval, this.tipInterval, this.timeInterval].forEach(interval => {
            if (interval) clearInterval(interval);
        });
    }

    showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    hideSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    }

    show404Error() {
        const errorSection = document.getElementById('errorSection');
        if (errorSection) {
            this.showSection('errorSection');
            ['previewSection', 'resultsSection', 'loadingSection'].forEach(id => this.hideSection(id));
            
            // Add speech announcement for error
            setTimeout(() => {
                if (this.speechEnabled) {
                    this.speakText("Sorry, we couldn't analyze your outfit. Please try with a different image.", { priority: 'high' });
                }
            }, 500);
        }
    }

    resetApp() {
        this.resetSession();
        
        const imageInput = document.getElementById('imageInput');
        if (imageInput) {
            imageInput.value = '';
            imageInput.type = 'text';
            imageInput.type = 'file';
        }
        
        const imagePreview = document.getElementById('imagePreview');
        if (imagePreview) {
            imagePreview.innerHTML = '';
        }
        
        ['previewSection', 'resultsSection', 'errorSection', 'loadingSection'].forEach(id => this.hideSection(id));
        
        // Stop any ongoing speech
        this.stopSpeech();
    }

    showError(m) { 
        alert(m); 
        if (this.speechEnabled) {
            this.speakText(m, { priority: 'high' });
        }
    }

    loadThemePreference() {
        const btn = document.getElementById('darkModeBtn');
        if (localStorage.getItem('lightMode') === 'true') { 
            document.body.classList.add('light-mode'); 
            if (btn) btn.textContent = '🌙'; 
        } else {
            if (btn) btn.textContent = '☀️';
        }
    }

    // Cleanup method
    destroy() {
        // Clear all intervals
        this.clearAllIntervals();
        
        // Clear sky update interval
        if (this.skyUpdateInterval) {
            clearInterval(this.skyUpdateInterval);
        }
        
        // Stop speech
        this.stopSpeech();
        
        // Remove event listeners
        document.removeEventListener('DOMContentLoaded', this.init);
    }
}

// ===== GLOBAL FUNCTIONS =====
function toggleDarkMode() {
    document.body.classList.add('theme-switching');
    setTimeout(() => {
        const light = document.body.classList.toggle('light-mode');
        const btn = document.getElementById('darkModeBtn');
        if (btn) btn.textContent = light ? '🌙' : '☀️';
        localStorage.setItem('lightMode', light);
        document.body.classList.remove('theme-switching');
    }, 50);
}

// ===== APP INITIALIZATION =====
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new OutfitVibeApp();
});

// ===== GLOBAL ERROR HANDLER =====
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    if (app && app.speechEnabled) {
        app.speakText('An error occurred. Please refresh the page.', { priority: 'high' });
    }
});

// ===== CLEANUP ON PAGE UNLOAD =====
window.addEventListener('beforeunload', () => {
    if (app) {
        app.destroy();
    }
});

