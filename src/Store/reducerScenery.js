import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import image3 from "../images/image3.svg";
import image4 from "../images/image4.svg";

const GET_CASH = "GET_CASH"
const PUSH_CASH = "PUSH_CASH"

const defaultState = {
    scenery: [
        {id: 1, image: image1, name: 'Raja Ampat', description: 'Indonesia', text: "Raja Ampat, or the Four Kings, is an archipelago located off the northwest tip of Bird's Head Peninsula on the island of New Guinea, in Indonesia's West Papua province. It comprises over 1,500 small islands, cays, and shoals surrounding the four main islands of Misool, Salawati, Batanta, and Waigeo, and the smaller island of Kofiau. The Raja Ampat archipelago straddles the Equator and forms part of Coral Triangle which contains the richest marine biodiversity on earth. Administratively, the archipelago is part of the province of West Papua. Most of the islands constitute the Raja Ampat Regency, which was separated out from Sorong Regency in 2004. The regency encompasses around 70,000 square kilometres (27,000 sq mi) of land and sea, of which 8,034.44 km2 constitutes the land area and has a population of 64,141 at the 2020 Census.[2] This excludes the southern half of Salawati Island, which is not part of this regency but instead constitutes the Salawati Selatan and Salawati Tengah Districts of Sorong Regency."},
        {id: 2, image: image2, name: 'Fanjingshan', description: 'China', text: "The Fanjingshan or Mount Fanjing, located in Tongren, Guizhou province, is the highest peak of the Wuling Mountains in southeastern China, at an elevation of 2,570 m (8,430 ft). The Fanjingshan National Nature Reserve was established in 1978 and designated a UNESCO Biosphere Reserve in 1986. Fanjingshan is a sacred mountain in Chinese Buddhism, considered to be the bodhimaṇḍa of the Maitreya Buddha. It became a UNESCO World Heritage Site in 2018.[1]"},
        {id: 3, image: image3, name: 'Vevey', description: 'Switzerland'},
        {id: 4, image: image4, name: 'Skadar', description: 'Montenegro'},
        {id: 5, image: image4, name: 'Skadar', description: 'Montenegro'},
        {id: 6, image: image4, name: 'Lelush', description: 'Milana'},
        {id: 7, image: image4, name: 'Skadar', description: 'Montenegro'},
        {id: 8, image: image4, name: 'Skadar', description: 'Montenegro'},
        {id: 9, image: image4, name: 'Skadar', description: 'Montenegro'}
    ]
}

export const reducerScenery = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CASH:
            return {...state, scenery: state.scenery}
        case PUSH_CASH:
            return {...state, scenery: state.scenery + action.payload}
        default:
            return state
    }
}