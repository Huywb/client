import home from '../public/home.svg'
import create from '../public/create.svg'
import edit from '../public/edit.svg'
import people from '../public/people.svg'

export const MenuList = [
    {
        label:'Home',
        route: '/',
        image: home
    },
    {
        label: 'Create Post',
        route: '/create-post',
        image:create
    },
    {
        label:'People',
        route:'/people',
        image: people
    },
    {
        label: 'Edit Profile',
        router:'/profile',
        image: edit
    }
]