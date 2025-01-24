import { BiSolidCategoryAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import Iphone16Promax from '../assets/Ip16promax.png'
import SamsungGalaxyS24Ultra from '../assets/samsung.png'
import MacBookProM2 from '../assets/macbookpro.png'
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
        image: SamsungGalaxyS24Ultra
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
        name: "Tv & Accessories",
        image: "",
        route: "/tv and accessories"
    }
]