const link = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();


            const targetId =this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntroView({ behavior: "smooth" });
            }
        })
    })
}

export default link;