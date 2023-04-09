import "../../../assets/index.css"
const ListBestMatch = (props) => {
    const { index, brawler, rank1, rank2, rank3, rank4, rank5, rank1Score, rank2Score, rank3Score, rank4Score, rank5Score } = props;


    return (
        <tr style={{ fontSize: '2vh' }} >
            <th className='align-middle text-center' scope="row">{index + 1}</th>
            <td>
                <img class="card-img-top img-fluid rounded-start" src={`img/brawler_profile/${brawler}.png`} alt={brawler} style={{ width: '10vh' }} />
                <p>{brawler}</p>
            </td>
            <td className='align-middle'>
                {
                    rank1 &&
                    <div className="figure">
                        <img class="card-img-top img-fluid  rounded-start me-3" src={`img/brawler_profile/${rank1}.png`} alt={rank1} style={{ width: '10vh' }} />
                        <div className="figcaption" style={{ color: 'black' }}>{rank1Score.toFixed(2)}</div>
                    </div>
                }
                {
                    rank2 &&
                    <div className="figure">
                        <img class="card-img-top img-fluid  rounded-start me-3" src={`img/brawler_profile/${rank2}.png`} alt={rank2} style={{ width: '10vh' }} />
                        <div className="figcaption" style={{ color: 'black' }}>{rank2Score.toFixed(2)}</div>

                    </div>
                }

                {
                    rank3 &&
                    <div className="figure">
                        <img class="card-img-top img-fluid  rounded-start me-3" src={`img/brawler_profile/${rank3}.png`} alt={rank3} style={{ width: '10vh' }} />
                        <div className="figcaption" style={{ color: 'black' }}>{rank3Score.toFixed(2)}</div>

                    </div>
                }
                {
                    rank4 &&
                    <div className="figure">
                        <img class="card-img-top img-fluid  rounded-start me-3" src={`img/brawler_profile/${rank4}.png`} alt={rank4} style={{ width: '10vh' }} />
                        <div className="figcaption" style={{ color: 'black' }}>{rank4Score.toFixed(2)}</div>

                    </div>
                }
                {
                    rank5 &&
                    <div className="figure">
                        <img class="card-img-top img-fluid  rounded-start me-3" src={`img/brawler_profile/${rank5}.png`} alt={rank5} style={{ width: '10vh' }} />
                        <div className="figcaption" style={{ color: 'black' }}>{rank5Score.toFixed(2)}</div>

                    </div>
                }

            </td>
        </tr>

    )
}
export default ListBestMatch;