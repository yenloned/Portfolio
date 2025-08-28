import AuctionHouse from "../media/AuctionHouse.png"
import PiggyBank from "../media/PiggyBank.png"
import Blackjack from "../media/Blackjack.jpg"
import DSA from "../media/DSA.jpg"
import PopcornMovieSearch from "../media/PopcornMovieSearch.png"
import BenchmarkAnalysisEngine from "../media/BenchmarkAnalysisEngine.jpg"
import ToYouCoco from "../media/ToYouCoco.png"

export const ProjectImage = (project: string) => {
    switch(project){
        case "To You, Coco":
            return ToYouCoco;
        case "Benchmark Analysis Engine":
            return BenchmarkAnalysisEngine;
        case "Auction House":
            return AuctionHouse;
        case "PiggyBank":
            return PiggyBank;
        case "Blackjack":
            return Blackjack;
        case "Data Structure and Algorithm Study":
            return DSA;
        case "Popcorn Movie Search":
            return PopcornMovieSearch;
        default:
            return "";
    }
}