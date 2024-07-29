"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const doctors = [
    {
      lat: 37.7749,
      lng: -122.4194,
      image:
        "https://vita-the-doctors-portal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoctor1.4edefa3b.png&w=96&q=75",
    },
    {
      lat: 34.0522,
      lng: -118.2437,
      image:
        "https://vita-the-doctors-portal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoctor1.4edefa3b.png&w=96&q=75",
    },
  ];

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749, // Replace with the center latitude
    lng: -122.4194, // Replace with the center longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA6LG9mPrEPW-59AgVl-BLDB3LECDvY52g">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {doctors.map((doctor, index) => (
          <Marker
            key={index}
            position={{ lat: doctor.lat, lng: doctor.lng }}
            icon={{
              url: doctor.image,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
