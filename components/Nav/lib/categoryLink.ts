
export default (type: string): {
    link: string,
    title: string,
    as: string
} => {
    switch(type) {
        case 'DD':
            return {
                link: '/views/category/[name]',
                title: 'near the Doomsday',
                as: '/views/category/Doomsday'
            };
        case 'NG': {
            return {
                link: '/views/category/[name]',
                title: 'the human negligence',
                as: '/views/category/negligence'
            }
        }
        default: {
            return {
                link: '/',
                title: 'home',
                as: '/'
            }
        }
    }
}