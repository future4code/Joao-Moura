import React ,{useState, useEffect}from 'react';
import {List, ItemProfile, ButtonClear} from './styled'
import {clear, getMatches} from '../../services/callApi'

export default function ListMatch(props) {
    const [listMatch, setListMatch] = useState([])

    useEffect(()=>{
        handleListMatch()
    },[])

    const handleListMatch = () => {
        getMatches(setListMatch)
    }

    const clearMatch = () => {
        clear()
        handleListMatch()
    }

    return (
        <>
            <List>
                {listMatch.map((profile)=>{
                    return(
                        <ItemProfile key={profile.id}>
                            <img src={profile.photo} alt={profile.photo} />
                            <p>{profile.name}</p>
                        </ItemProfile>
                    )
                })}
            </List>
            <ButtonClear onClick={clearMatch}>Limpar</ButtonClear>
        </>
    );
}

