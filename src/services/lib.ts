export const lib = {

    scrollToSection (id: string) {
        const section = document.getElementById(id)

        if (section) {
            window.scrollTo({
                top: section.offsetTop + 1, // +1 to ensure we trigger the section
                behavior: 'smooth',
            })
        }
    }
    
}