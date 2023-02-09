import { useEffect, useState } from "react";

const useSatoshi = () => {


    const email = "lmatsinde@gmail.com"

    const [users, setUsers] = useState([]);

    // const [coinType, setCoinType] = useState([]);


    useEffect(()=>{

        // let allUsers = [];
        // let allCoinType = [];
        
        fetch('https://satoshi-api.onrender.com/table1')
        .then(res => res.json())
        .then(data =>  setUsers(data)
            // data.map(Item =>{

            //     allUsers.push(Item?.clientname)
            //     allCoinType.push(Item?.exch)

            // })
            )


            // setUsers(allUsers)
            // setCoinType(allCoinType)
    },[])



    return {email, users}
};

export default useSatoshi;