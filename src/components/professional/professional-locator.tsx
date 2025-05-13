"use client";

import type React from "react";

import { FunctionComponent, useState } from "react";
import { MapPin, Phone, ChevronRight, ChevronLeft } from "lucide-react";

import Map from "../common/map";
import { Button } from "../ui/buttons/button";
import { Label } from "../ui/label/label";
import { Checkbox } from "../ui/checkbox/checkbox";
import { Input } from "../ui/input/input";

// Sample data for professionals
const professionals = [
  {
    id: 1,
    name: "DR. MORALES, HOUSTON EYE ASSOCIATES",
    address: "455 SCHOOL STREET, SUITE 47",
    city: "TOMBALL",
    state: "TX",
    zip: "77375",
    phone: "+1-281-748-3748",
    location: { lat: 30.097, lng: -95.623 },
  },
  {
    id: 2,
    name: "VISION CORNER",
    address: "4725 WESTHEIMER ROAD",
    city: "HOUSTON",
    state: "TX",
    zip: "77027",
    phone: "+1-713-623-2000",
    location: { lat: 29.743, lng: -95.458 },
  },
  {
    id: 3,
    name: "RX CARE",
    address: "16234 HADEN CREST CT.",
    city: "CYPRESS",
    state: "TX",
    zip: "77429",
    phone: "+12816359635",
    location: { lat: 29.972, lng: -95.633 },
  },
  {
    id: 4,
    name: "MEMORIAL EYE CENTER CINCO RANCH",
    address: "23701 CINCO RANCH BOULEVARD, SUITE 170",
    city: "KATY",
    state: "TX",
    zip: "77494",
    phone: "+1-281-347-3937",
    location: { lat: 29.762, lng: -95.783 },
  },
  {
    id: 5,
    name: "WEST HOUSTON EYE",
    address: "10260 WESTHEIMER SUITE 550",
    city: "HOUSTON",
    state: "TX",
    zip: "77042",
    phone: "+1-713-977-8464",
    location: { lat: 29.736, lng: -95.557 },
  },
];

type ProfessionalLocatorProps = {};

const ProfessionalLocator: FunctionComponent<ProfessionalLocatorProps> = () => {
  const [location, setLocation] = useState("");
  const [professionalName, setProfessionalName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mapCenter, setMapCenter] = useState("Houston,TX");
  const [mapZoom, setMapZoom] = useState(10);

  // Filter professionals based on search criteria
  const filteredProfessionals = professionals.filter((pro) => {
    const matchesLocation =
      location === "" ||
      pro.address.toLowerCase().includes(location.toLowerCase()) ||
      pro.city.toLowerCase().includes(location.toLowerCase()) ||
      pro.state.toLowerCase().includes(location.toLowerCase()) ||
      pro.zip.includes(location);

    const matchesName =
      professionalName === "" ||
      pro.name.toLowerCase().includes(professionalName.toLowerCase());

    return matchesLocation && matchesName;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update map center based on search if needed
    if (location) {
      setMapCenter(location);
    }
    setCurrentPage(1);
  };

  const handleProfessionalClick = (pro: (typeof professionals)[0]) => {
    // Center map on the selected professional
    setMapCenter(`${pro.city},${pro.state}`);
    setMapZoom(14);
  };

  return (
    <div className="flex flex-col mx-auto space-y-8 max-w-7xl">
      <h1 className="my-10 text-4xl font-bold text-center">
        Professional Locator
      </h1>
      {/* Main Content */}
      <main className="flex-grow">
        <div className="container py-8 mx-auto">
          {/* Search Form */}
          <div className="lg:flex lg:gap-8">
            <form
              onSubmit={handleSearch}
              className="flex flex-col w-full gap-4 mb-6 md:flex-row xl:w-4/6 lg:w-[60%]"
            >
              <Input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1"
              />
              <Input
                type="text"
                placeholder="Professional Name"
                value={professionalName}
                onChange={(e) => setProfessionalName(e.target.value)}
                className="flex-1"
              />
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600"
              >
                Search
              </Button>
            </form>
            <div className="flex w-full mb-6 space-x-3 xl:w-2/6 lg:w-[40%] align-center">
              <div className="border border-[#6C7275] flex items-center w-1/2 p-3 space-x-2">
                <Checkbox id="all-professionals" />
                <Label htmlFor="all-professionals">All Professionals</Label>
              </div>

              <div className="border border-[#6C7275] flex items-center w-1/2 p-3 space-x-2">
                <Checkbox id="product-specialists" />
                <Label htmlFor="product-specialists">Product Specialists</Label>
              </div>
            </div>
          </div>

          {/* Map and Results */}
          <div className="flex flex-col lg:flex-row gap-8 lg:max-h-[830px]">
            {/* Map Section */}
            <div className="xl:w-4/6 lg:w-[60%] h-[500px] lg:h-[830px] border">
              <Map />
            </div>

            {/* Results Section */}
            <div className="xl:w-2/6 h-[830px] lg:w-[40%]  p-3 border border-[#6C7275]">
              <div className="p-4 mb-4 text-white bg-black">
                <h2 className="text-xl font-bold">RESULTS</h2>
              </div>

              <div className="space-y-0">
                {filteredProfessionals.map((pro) => (
                  <div
                    key={pro.id}
                    className=" p-2 border-b border-b-[#E8ECEF] relative"
                    onClick={() => handleProfessionalClick(pro)}
                  >
                    <h3 className="w-full text-lg font-bold truncate ">
                      {pro.id} {pro.name}
                    </h3>
                    <p className="text-gray-700">{pro.address}</p>
                    <p className="text-gray-700">
                      {pro.city}, {pro.state} {pro.zip}
                    </p>

                    <div className="flex justify-between align-center">
                      <p className="flex items-center mt-2 text-gray-700">
                        <Phone className="w-4 h-4 mr-2" /> {pro.phone}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-orange-500 "
                      >
                        <MapPin className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6 space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className={
                    currentPage === 1 ? "bg-orange-500 text-white" : ""
                  }
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  className={
                    currentPage === 2 ? "bg-orange-500 text-white" : ""
                  }
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className={
                    currentPage === 3 ? "bg-orange-500 text-white" : ""
                  }
                >
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalLocator;
