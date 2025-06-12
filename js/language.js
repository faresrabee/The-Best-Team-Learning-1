// js/language.js
const translations = {
    en: {
        home: "Home",
        about: "About",
        courses: "Courses",
        questions: "Question Bank",
        contact: "Contact",
        send_message: "Send Message",
        hero_title: "Learn Without Limits",
        hero_sub: "Start your learning journey today with our interactive courses",
        browse_questions: "Browse Questions",
        start_learning: "Start Learning",
        why_choose: "Why Choose Us?",
        feature1: "Expert Instructors",
        feature1_desc: "Learn from industry professionals with real-world experience",
        feature2: "Interactive Content",
        feature2_desc: "Engaging videos, quizzes and coding exercises",
        feature3: "Certification",
        feature3_desc: "Earn certificates to showcase your skills",
        download_pdf: "Download PDF",
        question_bank_title: "Programming Question Bank",
        basic_concepts: "Basic Programming Concepts",
        quiz_instruction: "Test your knowledge with these fundamental questions",
        submit_answers: "Submit Answers",
        your_results: "Your Results",
        correct_answers: "correct answers",
        rate_quiz: "Rate this quiz:",
        q1: "What does HTML stand for?",
        q1_opt_a: "Hyper Text Markup Language",
        q1_opt_b: "Home Tool Markup Language",
        q1_opt_c: "Hyperlinks and Text Markup Language",
        q2: "Which CSS property is used to change the text color?",
        q2_opt_a: "text-color",
        q2_opt_b: "font-color",
        q2_opt_c: "color",
        q3: "How do you create a function in JavaScript?",
        q3_opt_a: "function = myFunction()",
        q3_opt_b: "function myFunction()",
        q3_opt_c: "create myFunction()",
        copyright: "2025 The Best Team Learning. All rights reserved",
        get_in_touch: "Get in Touch",
        contact_desc: "We'd love to hear from you. Please fill out the form below.",
        your_name: "Your Name",
        your_email: "Your Email",
        your_message: "Your Message"
    },
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        courses: "الدورات",
        questions: "بنك الأسئلة",
        contact: "اتصل بنا",
        send_message: "إرسال الرسالة",
        hero_title: "تعلم بلا حدود",
        hero_sub: "ابدأ رحلتك التعليمية اليوم مع دوراتنا التفاعلية",
        browse_questions: "تصفح الأسئلة",
        start_learning: "ابدأ التعلم الآن",
        why_choose: "لماذا تختارنا؟",
        feature1: "مدربون خبراء",
        feature1_desc: "تعلم من محترفين في المجال بخبرة عملية حقيقية",
        feature2: "محتوى تفاعلي",
        feature2_desc: "مقاطع فيديو جذابة، اختبارات وتمارين برمجية",
        feature3: "شهادات معتمدة",
        feature3_desc: "احصل على شهادات لإثبات مهاراتك",
        download_pdf: "تحميل PDF",
        question_bank_title: "بنك أسئلة البرمجة",
        basic_concepts: "مفاهيم البرمجة الأساسية",
        quiz_instruction: "اختبر معلوماتك مع هذه الأسئلة الأساسية",
        submit_answers: "إرسال الإجابات",
        your_results: "نتيجتك",
        correct_answers: "إجابات صحيحة",
        rate_quiz: "قيم هذا الاختبار:",
        q1: "ما هو معنى HTML؟",
        q1_opt_a: "لغة ترميز النص الفائق",
        q1_opt_b: "لغة ترميز أدوات المنزل",
        q1_opt_c: "الروابط والنصوص بلغة الترميز",
        q2: "أي خاصية CSS تُستخدم لتغيير لون النص؟",
        q2_opt_a: "text-color",
        q2_opt_b: "font-color",
        q2_opt_c: "color",
        q3: "كيف تنشئ دالة في جافاسكريبت؟",
        q3_opt_a: "function = myFunction()",
        q3_opt_b: "function myFunction()",
        q3_opt_c: "create myFunction()",
        copyright: "© 2025 فريق التعلم الأفضل. جميع الحقوق محفوظة",
        get_in_touch: "تواصل معنا",
        contact_desc: "نود أن نسمع منك. يرجى ملء النموذج أدناه.",
        your_name: "اسمك",
        your_email: "بريدك الإلكتروني",
        your_message: "رسالتك"
    }
};

// تطبيق اللغة مع الحفاظ على التنسيق
function applyTranslation(lang) {
    // تغيير اتجاه الصفحة
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.lang = lang;
    
    // تطبيق الترجمات مع الحفاظ على العناصر الداخلية
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // إذا كان العنصر يحتوي على عناصر فرعية
            if (el.children.length > 0) {
                const span = document.createElement('span');
                span.textContent = translations[lang][key];
                while (el.firstChild) el.removeChild(el.firstChild);
                el.appendChild(span);
                el.innerHTML += el.innerHTML; // استعادة العناصر الأصلية
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `lang-${lang}`);
    });
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // استعادة اللغة المحفوظة أو استخدام اللغة الافتراضية
    const savedLang = localStorage.getItem('app-lang') || 'en';
    applyTranslation(savedLang);
    
    // إعداد أحداث أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id === 'lang-en' ? 'en' : 'ar';
            localStorage.setItem('app-lang', lang);
            applyTranslation(lang);
        });
    });
});

// دالة مساعدة للترجمة الديناميكية
function translate(key, lang = null) {
    const language = lang || localStorage.getItem('app-lang') || 'en';
    return translations[language]?.[key] || key;
}
