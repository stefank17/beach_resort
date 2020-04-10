import React, { Component } from 'react'
import {RoomContext} from '../context';
import Room from './Room';
import Title from './Title';
import Loading from './Loading';
// import {Rooms} from '../pages/Rooms';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms : rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            <section>
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
            </section>
        )
    }
}
