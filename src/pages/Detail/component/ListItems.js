const ListItems = (props) => {
    
    const { brawler, power, trophies, winrate, index} = props;
    
    
    return (
        <tr style={{fontSize :'2vh'}} >
            <th className='align-middle text-center' scope="row">{index+1}</th>
            <td>
                <img class="card-img-top img-fluid img-thumbnail rounded-start" src={`img/brawler_profile/${brawler}.png`} alt={brawler} style={{ width: '10vh'}} />
            </td>
            <td className='align-middle'>{power}</td>
            <td className='align-middle'>{trophies}</td>
            <td className='align-middle'>{winrate.toLocaleString("en", {style: "percent"})}</td>
        </tr>
    
    )
    }
export default ListItems;