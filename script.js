const elements = document.querySelectorAll('.scroll-animate');


console.log(elements)


const observer = new IntersectionObserver(
    (entries) => {

        console.log(entries);

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target)
                entry.target.classList.add('show');
            }
        });
    },

    {
        threshold: 0.2
    }
);

// observer.observe(elements)
elements.forEach(el => observer.observe(el));



