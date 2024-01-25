 document.addEventListener("DOMContentLoaded", function() {
    // Event listener for project cells
    var projectCells = document.querySelectorAll('.projectCell');
    projectCells.forEach(function(cell) {
        cell.addEventListener('click', function() {
            var projectId = this.getAttribute('data-project');
            var projectArticle = document.getElementById(projectId);
            
            // Hide all projectInfo articles
            document.querySelectorAll('.projectInfo').forEach(function(article) {
                article.classList.remove('projectAppear');
            });

            // Show the clicked project's info article
            if (projectArticle) {
                projectArticle.classList.add('projectAppear');
            }
        });
    });

    // Event listener for 'x' icon in projectInfo articles
    var closeIcons = document.querySelectorAll('.projectInfo .fa-xmark');
    closeIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.parentElement.classList.remove('projectAppear');
        });
    });

    // Event listener for links at the end of projectInfo articles
    var projectLinks = document.querySelectorAll('.projectInfo a');
    projectLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            this.closest('.projectInfo').classList.remove('projectAppear');
        });
    });
});

// Typing animation


const textContainer = document.getElementById('text-container');
        const sentences = [
            "Hey",
            "Coucou", 
            "السلام عليكم", 
            "Hola"
        ];

        let currentSentenceIndex = 0;
        let currentCharacterIndex = 0;
        let deleting = false;

        function typeText() {
            const currentSentence = sentences[currentSentenceIndex];
            const currentCharacter = currentSentence.charAt(currentCharacterIndex);

            if (!deleting) {
                textContainer.textContent += currentCharacter;
                currentCharacterIndex++;
            } else {
                textContainer.textContent = currentSentence.substring(0, currentCharacterIndex - 1);
                currentCharacterIndex--;
            }

            if (currentCharacterIndex > currentSentence.length) {
                deleting = true;
                setTimeout(typeText, 600); // Delay before deleting
            } else if (currentCharacterIndex < 0) {
                deleting = false;
                currentSentenceIndex++;
                if (currentSentenceIndex >= sentences.length) {
                    currentSentenceIndex = 0; // Start over if all sentences have been shown
                }
                setTimeout(typeText, 400); // Delay before typing the next sentence
            } else {
                const delay = deleting ? 50 : 50; // Adjust typing speed here
                setTimeout(typeText, delay);
            }
        }

        // Start typing the first sentence
        typeText();

// 

let nav = document.querySelector("nav");


let li = document.querySelectorAll(".navLI");


for(let i = 0; i<li.length; i++){
    li[i].addEventListener("click", fadeOut);
}

function fadeOut(){
    nav.style.left = "-100%";

}

function slideIn(){
    nav.style.left = "0";

}



