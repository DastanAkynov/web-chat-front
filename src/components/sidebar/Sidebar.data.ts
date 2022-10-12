import HomeIcon from '../../shared/assets/icons/home-icon.svg';
import ChatIcon from '../../shared/assets/icons/chat-icon.svg';
import ContactIcon from '../../shared/assets/icons/contact-icon.svg'

type Menu = {
  img: any,
  link: string,
  alt: string,
  text: string
}

export const MenuList: Menu[] = [
  { 
    img: HomeIcon,
    link: '/',
    alt: "home",
    text: 'Home'
  },
  { 
    img: ChatIcon,
    link: '/chat',
    alt: "chat",
    text: 'Chat'
  },
  { 
    img: ContactIcon,
    link: '#',
    alt: "contact",
    text: 'Contact'
  },

]