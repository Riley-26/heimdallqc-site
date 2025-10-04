import { getToken } from "next-auth/jwt"

export const lib = {
    scrollToSection(id: string) {
        const section = document.getElementById(id)

        if (section) {
            window.scrollTo({
                top: section.offsetTop + 1, // +1 to ensure we trigger the section
                behavior: 'smooth',
            })
        }
    },

    toIdTag (id: string | number) {
        const str = id.toString().padStart(8, '0')
        return `${str.slice(0, 4)}-${str.slice(4, 8)}`
    },

    formatDate(dateString: string) {
        const date = new Date(dateString)

        return date.toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    },
}
