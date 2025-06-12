document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-quiz');
    const quizResults = document.getElementById('quiz-results');
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback-message');
    const stars = document.querySelectorAll('.stars i');
    
    // الإجابات الصحيحة
    const correctAnswers = {
        'q1': 'a',
        'q2': 'c',
        'q3': 'b'
    };
    
    // تقديم الإجابات
    submitBtn.addEventListener('click', function() {
        let score = 0;
        
        // حساب الدرجة
        for (const question in correctAnswers) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }
        
        // عرض النتائج
        scoreElement.textContent = score;
        quizResults.classList.remove('hidden');
        
        // تقديم الملاحظات
        if (score === Object.keys(correctAnswers).length) {
            feedbackElement.textContent = 'Excellent! You got all answers correct.';
        } else if (score >= Object.keys(correctAnswers).length / 2) {
            feedbackElement.textContent = 'Good job! You passed the quiz.';
        } else {
            feedbackElement.textContent = 'Keep practicing! Review the material and try again.';
        }
        
        // التمرير إلى النتائج
        quizResults.scrollIntoView({ behavior: 'smooth' });
    });
    
    // نظام التقييم بالنجوم
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // هنا يمكنك إرسال التقييم إلى الخادم
            console.log(`User rated the quiz ${rating} stars`);
        });
    });
});

// main.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});
