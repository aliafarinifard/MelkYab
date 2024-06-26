import React from 'react'

// ** leaflet
import { MapContainer, TileLayer } from 'react-leaflet'

// ** Components
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker'

const Map = ({address, city, country}) => {
    return (
        <MapContainer
            center={[53.35, 18.8]}
            zoom={1}
            scrollWheelZoom={false}
            style={{
                height: "40vh",
                width: "100%",
                marginTop: "20px",
                zIndex: 0
            }}
        >

            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

            <GeoCoderMarker address={`${address} ${city} ${country}`} />

        </MapContainer>
    )
}

export default Map