import UserAvatar from '../../shared/assets/img/user-avatar.png'

type User = {
  name: string,
  status: string,
  img: any,
  lastTime: string,
  description: string
}

export const Users: User[] = [
  {
    name: 'Luy Robin',
    status: 'writes',
    img: UserAvatar,
    lastTime: '1 minute ago',
    description: 'Most of its text is made up from sections 1.10.32–3 of Ciceros De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). '
  },
  {
    name: 'Jared Sunn',
    status: 'records voice message',
    img: UserAvatar,
    lastTime: '1 minute ago',
    description: 'Voice message (01:15) '
  },
]