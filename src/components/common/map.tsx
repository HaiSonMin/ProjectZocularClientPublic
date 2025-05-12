"use client";

import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "100%",
};

const center = {
	lat: 37.7749,
	lng: -122.4194,
};

const Map = () => {
	const {isLoaded, loadError} = useJsApiLoader({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
	});
	
	if (loadError) return <div>Error loading maps</div>;
	if (!isLoaded) return <div>Loading...</div>;
	
	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
			<Marker position={center}/>
		</GoogleMap>
	);
};

export default Map;
