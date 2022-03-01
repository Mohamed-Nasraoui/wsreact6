import React from 'react';
import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};

const Rating = ({isMovieRating,MovieRating,setRating}) =>{
    const handelChange = value =>{
        setRating (value);
    };
    
    return (
        isMovieRating
        ?
    <span>    
    <br /> 
    <Rate disabled defaultValue={0} character={({ index }) => customIcons[index + 1]} onChange={handelChange} value={MovieRating} />
    </span>
    :
    <span>    
    <br />
    <Rate defaultValue={0} character={({ index }) => customIcons[index + 1]} onChange={handelChange} />
    </span>
    
    )
        };

export default Rating