import React from 'react'
import RoomsFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../context';
import Loading from './Loading';

const RoomContainer = () => {
    return (<RoomConsumer>
            {(value) => {
                const {loading, sortedRooms, rooms} = value;
                    if (loading) {
                        return <Loading/>;
                    }
                    return (
                        <div>
                            <RoomsFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms}/>
                        </div>
                    );
                }}
        </RoomConsumer>
    )}

export default RoomContainer
