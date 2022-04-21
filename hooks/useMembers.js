import { useEffect, useState } from 'react';

const useMembers = () => {
    const [allMembers, setAllMembers] = useState([]);

    useEffect(() => {
        fetchMembersData();
    }, []);

    const fetchMembersData = () => {
        fetch('https://faithhouse.herokuapp.com/api/v1/users')
            .then(res => res.json())
            .then(data => {
                setAllMembers(data);
                console.log('ALL MEMBERS DATA FROM useMembers Hook: ', data);
            });
    };

    const addMemberHandler = (data) => {
        fetch("https://faithhouse.herokuapp.com/api/v1/users/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fetchMembersData();
            })
            .catch((err) => console.log(err));
    }

    return { allMembers, addMemberHandler };
};

export default useMembers;
