import { BiSolidCategoryAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import Iphone16Promax from '../assets/Ip16promax.png'
import GalaxyS24 from '../assets/galaxys24.png'
import MacBookProM2 from '../assets/macbookpro.png'
import Controller from '../assets/controller.png'
import PcSet from '../assets/pc-set.png'
import SmartWatch from '../assets/smartwatch.png'
import Camera from '../assets/camera.png'
import Microphone from '../assets/microphone.png'
import Tv from '../assets/tv.png'


export const navbar = [
    {
        id: 1,
        name: "Home",
        route: "/",
        icon: HiHome
    },
    {
        id: 2,
        name: "Category",
        route: "/category",
        icon: BiSolidCategoryAlt 
    },
    {
        id: 3,
        name: "Wishlist",
        route: "/wishlist",
        icon: FaHeart
    },
    {
        id: 4,
        name: "Cart",
        route: "/cart",
        icon: FaCartShopping
    },
    {
        id: 5,
        name: "account",
        route: "/account",
        icon: MdAccountCircle
    }
]

export const sliderImage = [
    {
        id: 1,
        title: "IPhone 16 Pro Max",
        description: "Release on ....",
        image: Iphone16Promax
    },
    {
        id: 2,
        title: "Samsung Galaxy S24 Ultra",
        description: "Release on ....",
        image: GalaxyS24
    },
    {
        id: 3,
        title: "Mac Book Pro M2",
        description: "Release on ....",
        image: MacBookProM2
    }
]

export const categories = [
    {
        id: 1,
        name: "PC Set",
        image: PcSet,
        route: "/pc-set"
    },
    {
        id: 2,
        name: "Smart Phones",
        image: GalaxyS24,
        route: "/smartphones"
    },
    {
        id: 3,
        name: "Laptop & Pcs",
        image: MacBookProM2,
        route: "/laptopandpcs"
    },
    {
        id: 4,
        name: "Gadgets",
        image: Controller,
        route: "/gadgets"
    },
    {
        id: 5,
        name: "Smart Watch",
        image: SmartWatch,
        route: "/watch"
    },
    {
        id: 6,
        name: "Camera",
        image: Camera,
        route: "/camera"
    },
    {
        id: 7,
        name: "Microphone & Speaker",
        image: Microphone,
        route: "/micandspeaker"
    },
    {
        id: 8,
        name: "Tv & Home Entertainment",
        image: Tv,
        route: "/tvandhomeentertainment"
    }
]