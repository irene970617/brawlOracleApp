import {createSearchParams, useNavigate} from "react-router-dom"

const ListBrawlers = (props) => {
    const navigate = useNavigate();
    const { mode, brawler1, brawler2, brawler3, brawler4, brawler5 } = props;
    // click "view more", it will take you to the detail page with the mode appearing on the URL 
    // EX: ...detail?mode=hotZone
    const handleLinkClick = async (e) => {
        e.preventDefault();
        const passvalue = () => {
            navigate({
                pathname:"/detail",
                search: createSearchParams({
                    mode: mode
                }).toString()
            });
        };
        passvalue() 
    };
    

    return (
            <div class="card col-4 p-0" style={{ backgroundColor: '#e4f1fe', border: 'solid 2vh black' }}>
                <img src={`img/mode/${mode}.png`} class="card-img-top" alt="mode" />
                <div class="card-body border-0" >
                    <img class="card-img-top img-fluid rounded-start " src={`img/brawler_profile/${brawler1}.png`} alt="profile" style={{ width: '6vh' }} />
                    <img class="card-img-top img-fluid rounded-start mx-1" src={`img/brawler_profile/${brawler2}.png`} alt="profile" style={{ width: '6vh' }} />
                    <img class="card-img-top img-fluid rounded-start mx-1" src={`img/brawler_profile/${brawler3}.png`} alt="profile" style={{ width: '6vh' }} />
                    <img class="card-img-top img-fluid rounded-start mx-1" src={`img/brawler_profile/${brawler4}.png`} alt="profile" style={{ width: '6vh' }} />
                    <img class="card-img-top img-fluid rounded-start " src={`img/brawler_profile/${brawler5}.png`} alt="profile" style={{ width: '6vh' }} />
                    <div className='mt-3 text-end'>
                        <a href='/detail' class="card-text"><small class="text-muted" onClick={handleLinkClick}>view more...</small></a>
                    </div>
                </div>
            </div>
    )
}
export default ListBrawlers;