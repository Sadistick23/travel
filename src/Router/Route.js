import HomePage from "../Page/HomePage/HomePage";
import Destinations from "../Page/Destinations/Destinations";
import Partner from "../Page/Partner/Partner";
import About from "../Page/About/About";
import FeaturedDestinations from "../Page/FeaturedDestinations/FeaturedDestinations";
import Scenery from "../Page/Scenery/Scenery";

export const publicRoutes = [
    {path: '/home', element: HomePage, id: 1},
    {path: '/destinations', element: Destinations, id: 2},
    {path: '/about', element: About, id: 3},
    {path: '/partner', element: Partner, id: 4},
    {path: '/scenery', element: FeaturedDestinations, id: 5},
    {path: '/scenery/:id', element: Scenery, id: 6},
]