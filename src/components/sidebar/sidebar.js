import {view as Filter} from '../filter'
import Profile from '../profile/profile.js'

const Sidebar =()=>{
    return(
        <div class="sidebar">
            <Filter />
            <Profile />
        </div>
    )
}

export default Sidebar