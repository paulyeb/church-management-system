import { useEffect, useState } from 'react';

const useMembers = () => {
    const [allMembers, setAllMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/users')
            .then(res => res.json())
            .then(data => {
                setAllMembers(data);
                console.log(data);
            });
    }, []);

    return allMembers;
};

export default useMembers;
