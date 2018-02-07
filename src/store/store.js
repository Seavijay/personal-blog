import { createStore } from 'redux'
import reducer from '../components/filter'

const moments = [
    {
        category: "Movies",
        tag: "Love",
        information: {
            Pics: {
                pic1: "./icon/cmbyn.png"
            },
            Name: "Call Me by Your Name",
            PicsIntroduction: {
                Director: "Luca Guadagnino",
                Stars: "Armie Hammer, Timothée Chalamet...",
                Language: "English",
                ReleaseDdate: "2017-01-22"
            },
            Comment: "Just as director,Luca Guadagnino,said,\"I think in love, when you call the other by your name, that means complete surrender.\""
        }
    },
    {
        category: "Music",
        tag: "Coldplay",
        information: {
            Pics: {
                pic1: "./icon/kaleidoscope.png"
            },
            Name: "Hypnotised",
            PicsIntroduction: {
                Singer: "Coldplay",
                Album: "kaleidoscope",
                ReleaseDdate: "2017-7-14"
            },
            Comment: "感觉自己一人停驻于古堡，奔跑于草原，遨游于海洋、翱翔于天空、漂浮于宇宙......。"
        }
    }
]
const configStore = {
    monents: moments
}

export default createStore(reducer, configStore)