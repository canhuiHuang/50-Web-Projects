const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.querySelector('button').addEventListener('click', () => {
        console.log('hola');
        if (faq.classList.contains('active')) {
            faq.classList.remove('active');
        }
        else {
            faq.classList.add('active');
        }
    })
})