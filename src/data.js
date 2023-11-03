import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 2, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    target: '_blank',
    iconClass: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    target: '_blank',
    iconClass: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    target: '_blank',
    iconClass: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    icon: 'wallet',
  },
  {
    id: 2,
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    icon: 'tree',
  },
  {
    id: 3,
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    icon: 'socks',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    title: 'Tibet Adventure',
    date: 'august 26th, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    days: '6 days',
    icon: 'fa fa-map',
    location: 'china',
    price: 'from $2100',
  },
  {
    id: 2,
    image: tour2,
    title: 'best of java',
    date: 'october 1th, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    days: '11 days',
    icon: 'fa fa-map',
    location: 'indonesia',
    price: 'from $1400',
  },
  {
    id: 3,
    image: tour3,
    title: 'explore hong kong',
    date: 'september 15th, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    days: '8 days',
    icon: 'fa fa-map',
    location: 'hong kong',
    price: 'from $5000',
  },
  {
    id: 4,
    image: tour4,
    title: 'kenya highlights',
    date: 'december 5th, 2019',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    days: '20 days',
    icon: 'fa fa-map',
    location: 'kenya',
    price: 'from $3300',
  },
]
