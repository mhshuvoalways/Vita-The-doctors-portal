"use client";

import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128,
  lng: -74.006,
};

const DoctorMap = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] =
    (useState < Doctor) | (null > null);

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {doctors.map((doctor) => (
        <Marker
          key={doctor.id}
          position={doctor.position}
          onClick={() => setSelectedDoctor(doctor)}
        />
      ))}
      {selectedDoctor && (
        <InfoWindow
          position={selectedDoctor.position}
          onCloseClick={() => setSelectedDoctor(null)}
        >
          <div>
            <p>{selectedDoctor.name}</p>
            <Image
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="max-w-48"
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default DoctorMap;
