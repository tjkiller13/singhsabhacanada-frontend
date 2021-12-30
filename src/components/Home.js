// rafc
import React, {useEffect} from 'react'


export const Home = (props) => {
    useEffect(() => {
        document.title = `Singh Sabha Canada | ${props.category}`;
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            This is home
        </div>
    )
}
