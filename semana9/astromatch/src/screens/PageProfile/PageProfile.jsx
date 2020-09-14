import React ,{useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Buttons from '../../components/Buttons/Buttons'
import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile'
import {getProfileToChoose, choosePerson} from '../../services/callApi'


const useStyles = makeStyles(() => ({
    root: {
        width: 370,
        marginTop: 20,
        height: 550,
        border: 1 ,
        position: 'relative',
    },
}));


export default function PageProfile(props) {
    const classes = useStyles();
    const [profile, setProfile] = useState({})

    useEffect(()=>{
        handleProfile()
    },[])

    const handleProfile = () => {
        getProfileToChoose(setProfile)
    }

    const choose = () =>{
        choosePerson(profile.id)
        handleProfile()
    }

    return (
        <Card className={classes.root}>
            <Header switchPages={props.switchPages} myPage={props.myPage}/>
                <Profile
                  photo={profile.photo}
                  name={profile.name}
                  age={profile.age}
                  bio={profile.bio}
                  x={profile}
                />
            <Buttons 
                onClickhandleProfile={handleProfile}
                onClickChoose={choose}
            />
        </Card>
    );
}
