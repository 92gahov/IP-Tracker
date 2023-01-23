import React, { useEffect, useState } from 'react';
import Table from './Table';

const Search = () => {

    const [data, setData] = useState({});
    const [showErr, setShowErr] = useState(true);
    const [ipValue, setIpValue] = useState("");

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    date = `${dd}.${mm}.${yyyy}`;

    const addZero = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    h = addZero(h);
    m = addZero(m);
    let time = `${h}:${m}`;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_IP_URL}/json/`)
            .then((res) => res.json())
            .then(data => {
                setData(data);
                setShowErr(true);
                const ipData = {
                    date: date,
                    time: time,
                    ip: data.ip,
                    country: data.country_name,
                    city: data.city,
                    organization: data.org,
                    latitude: data.latitude,
                    longitude: data.longitude
                };
                fetch(`${process.env.REACT_APP_URL}`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(ipData)
                })
            })
            .catch((error) => {
                if (error) {
                    setShowErr(false);
                }
            })
        // eslint-disable-next-line
    }, []);

    const validateIpAddress = (ipaddress) => {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return (true);
        }
        return (false);
    };

    const valueHandler = (e) => {
        setIpValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateIpAddress(ipValue)) {
            fetch(`${process.env.REACT_APP_IP_URL}/${ipValue}/json/`)
                .then((res) => res.json())
                .then(data => {
                    setData(data);
                    setIpValue("");
                    setShowErr(true);
                })
        } else {
            setShowErr(false);
        }
    };

    return (
        <>
            <div className='search'>
                <form
                    onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={ipValue}
                        onChange={valueHandler}
                        placeholder={data.ip}></input>
                    <button type='submit'><i className="fa fa-search"></i></button>
                </form>
            </div>
            <Table
                data={data}
                showErr={showErr} />
        </>
    )
};

export default Search;