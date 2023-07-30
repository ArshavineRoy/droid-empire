function Bot ({bot, setBot}){
    return (
        <div class="collection display-bots flex-wrap">
            <div class="card">
            <img 
                src="https://robohash.org/sedhicquo.png?size=300x300&set=set1"
                class="card-img-top bot-specs"
                alt="bot imgae"                
            />
            <div class="card-body bot-specs">
                <h5 class="card-title">wHz-93 <span>Class Icon</span></h5>
                <p class="card-text">1010010101001101100011000111101</p>
            </div>
            <ul class="list-group list-group-flush bot-info">
                <li class="list-group-item">
                <i class="fa-solid fa-heart-pulse" style="color: #1f2951"> 94</i>
                <i class="fa-solid fa-bolt-lightning"> 20</i>
                <i class="fa-solid fa-shield-halved"> 63</i>
                </li>
            </ul>
            <div class="card-body d-flex justify-content-between">
                <a href="#" class="btn btn-success">Enlist</a>
                <a href="#" class="btn btn-warning">Favorite</a>
            </div>
            </div>
        </div>
    )
}


export default Bot; 